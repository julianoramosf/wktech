import styled from 'styled-components'

const PrincipalContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;

  .table {
    z-index: auto !important;
    width: 100%;
    position: relative;
    box-shadow: 0px 4px 16px rgba(35, 31, 72, 0.04);
    border-radius: var(--border-radius-default);
    min-height: 8rem !important;
    max-height: auto;
    display: flex;
    align-items: center;

    .rdt_ExpanderRow {
      -webkit-box-shadow: inset 0px 0px 15px 0px rgba(150, 150, 150, 0.15);
      -moz-box-shadow: inset 0px 0px 15px 0px rgba(150, 150, 150, 0.15);
      box-shadow: inset 0px 0px 40px 0px rgba(150, 150, 150, 0.15);
      background-color: var(--light-30);
      width: 100%;
    }

    .rdt_TableHead {
      background-color: var(--gray-30);
      border: none;
      border-radius: 6px 6px 0 0;
      height: 50px;
    }

    .rdt_TableHeadRow {
      background: var(--light-30);
    }

    .rdt_TableCol {
      font: 600 12px var(--font);
      text-transform: uppercase;
      color: var(--gray-400);

      span {
        overflow: hidden;
        white-space: nowrap;
        word-break: break-all;
        text-overflow: ellipsis !important;
      }
    }

    .rdt_TableRow {
      span {
        overflow: hidden;
        white-space: nowrap;
        word-break: break-all;
        text-overflow: ellipsis !important;
      }

      button {
        background-color: transparent;

        :hover {
          background-color: transparent;
        }
      }
    }

    .rdt_TableBody {
      font-family: var(--font);
      font-size: 14px;
      padding-bottom: 1rem;
      line-height: 21px;
      max-height: fit-content !important;
    }
  }

  .rdt_Pagination {
    margin-top: -1rem;
    min-height: 52px !important;
    position: relative;
    font-family: var(--font);

    span:nth-child(1) {
      font-size: 0px;

      :after {
        content: 'Linhas por página';
        font-size: 13.8px;
        margin-top: 0;
      }
    }
  }

  .title-null {
    display: flex;
    align-items: center;
    justify-content: center;
    text-align: center;
    height: 4rem;

    span {
      line-height: 24px;
    }
  }

  @media (max-width: 767px) {
    .table .rdt_TableBody {
      span {
        width: auto;
      }
    }
  }
`

const Title = styled.span`
  font: 400 1.2rem var(--font);
`

export { Title, PrincipalContainer }
