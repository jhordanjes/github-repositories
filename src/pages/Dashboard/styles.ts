import styled from 'styled-components';
import { shade, lighten } from 'polished';

interface FormProps{
  hasError: boolean;
}

export const Title = styled.h1`
  font-size: 45px;
  color: #3A3A3A;
  margin-top: 80px;
  line-height: 56px;
  max-width: 450px;
`;

export const Form = styled.form<FormProps>`
  margin-top: 40px;
  max-width: 700px;
  display: flex;

  input{
    flex: 1;
    height: 50px;
    padding: 0 24px;
    border: 0;
    border-radius: 5px 0 0 5px;
    border: 2px solid ${(props) => props.hasError ? '#c53030' : '#fff'};
    border-right: 0;

    &::placeholder{
      color: #a8a8b3;
    }
  }

  button{
    width: 210px;
    height: 50px;
    background: #04D361;
    border-radius: 0 5px 5px 0;
    border: 0;
    color: #fff;
    font-weight: bold;
    transition: background-color 0.2s;

    &:hover{
      background: ${shade(0.2, '#04D361')};
    }
  }
`;

export const Repositories = styled.div`
  margin-top: 80px;
  max-width: 700px;

  a{
    background: #fff;
    border-radius: 5px;
    width: 100%;
    padding: 24px;
    display: block;
    text-decoration: none;
    display: flex;
    align-items: center;
    transition: 0.5s;

    & + a {
      margin-top: 16px;
    }

    &:hover{
      transform: translateX(10px);
      background: ${lighten(0.4, '#04D361')};
    }

    img{
      width: 64px;
      height: 64px;
      border-radius: 50%;
    }

    div{
      margin: 0 16px;
      flex: 1;

      strong{
        font-size: 20px;
        color: #3D3D4D;
      }

      p{
        font-size: 18px;
        color: #A8A8B3;
        margin-top: 4px;
      }
    }

    svg{
      margin-left: auto;
      color: #cbcbd6;
    }
  }
`;
