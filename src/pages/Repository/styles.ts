import styled from 'styled-components';
import { lighten } from 'polished';

export const Header = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;

  a{
    display: center;
    text-decoration: none;
    align-items: center;
    color: #a8a8b3;
    transition: 2s;

    &:hover{
      color: #666;
    }

    svg{
      margin-right: 5px;
    }
  }
`;

export const RepositoryInfo = styled.section`
  margin-top: 80px;

  header{
    display: flex;
    align-items: center;

    img{
      width: 64px;
      height: 64px;
      border-radius: 50%;
    }

    div{
      margin-left: 24px;


      strong{
        font-size: 26px;
        color: #3D3D4D;
        display: block;
      }

      p{
        font-size: 18px;
        color: #737380;
        margin-top: 4px;
        display: block;
      }
    }
  }

  ul{
    list-style-type: none;
    display: flex;
    margin-top: 40px;

    li{
      & + li{
        margin-left: 80px;
      }

      strong{
        display: block;
        font-size: 36px;
        color: #3D3D4D;
      }

      span{
        display: block;
        margin-top: 4px;
        color: #6c6c80;
      }
    }
  }
`;

export const Issues = styled.div`
  margin-top: 80px;

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
