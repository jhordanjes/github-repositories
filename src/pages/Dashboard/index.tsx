import React, { useState, FormEvent, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { toast } from 'react-toastify';
import { FiChevronRight } from 'react-icons/fi';
import api from '../../services/api';
import logo from '../../assets/logo.svg';

import { Title, Form, Repositories } from './styles';


interface Repository {
  full_name: string;
  description: string;
  owner: {
    login: string;
    avatar_url: string;
  }
}

const Dashboard: React.FC = () => {
  const [newRepo, setNewRepo] = useState('');
  const [repositories, setRepositories] = useState<Repository[]>(() => {
    const storageRepositories = localStorage.getItem('@githubExplorer:repositories');
    if (storageRepositories) {
      return JSON.parse(storageRepositories);
    } else {
      return [];
    }
  });
  const [inputError, setInputError] = useState(false);

  useEffect(() => {
    localStorage.setItem('@githubExplorer:repositories', JSON.stringify(repositories));
  }, [repositories]);

  async function handleAddRepository(event: FormEvent<HTMLFormElement>): Promise<void> {
    event.preventDefault();

    if(!newRepo) {
      setInputError(true);
      toast.error('Digite o autor/nome do repotório');
      return;
    }

    try{
      const response = await api.get<Repository>(`repos/${newRepo}`);

      const repository = response.data;

      setRepositories([...repositories, repository]);
      setNewRepo('');
      setInputError(false);
    }catch(err){
      setInputError(true);
      toast.error('Erro na busca por esse repositório');
    }
  }

  return (
      <>
        <img src={logo} alt="Github Repositories"/>
        <Title>Explore repotsitórios no Github</Title>

        <Form hasError={inputError} onSubmit={handleAddRepository}>
          <input
            value={newRepo}
            onChange={e => setNewRepo(e.target.value)}
            placeholder="Digite o nome do repositório"
          />
          <button type="submit">Pesquisar</button>
        </Form>

        <Repositories>
          {repositories.map(repository => (
            <Link
              key={repository.full_name}
              to={`/repository/${repository.full_name}`}>
              <img src={repository.owner.avatar_url}
                alt={repository.owner.login}
              />
              <div>
                <strong>{repository.full_name}</strong>
                <p>{repository.description}</p>
              </div>

              <FiChevronRight size={20}  />
            </Link>
          ))}
        </Repositories>
      </>
    );
};

export default Dashboard;
