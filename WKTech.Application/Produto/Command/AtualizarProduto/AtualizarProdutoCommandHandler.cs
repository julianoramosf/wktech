using MediatR;
using WKTech.Domain.ProdutoAggregate;
using WKTech.Infra.Data.UoW;
using System;
using System.Threading;
using System.Threading.Tasks;
using ProdutoAgg = WKTech.Domain.ProdutoAggregate;
using CategoriaAgg = WKTech.Domain.CategoriaAggregate;

namespace WKTech.Application.Produto.Command.AtualizarProduto
{
    public class AtualizarProdutoCommandHandler : CommandHandler, IRequestHandler<AtualizarProdutoCommand, bool>
    {
        private readonly IProdutoRepository _produtoRepository;
        private readonly CategoriaAgg.ICategoriaRepository _categoriaRepository;
        public AtualizarProdutoCommandHandler(ProdutoAgg.IProdutoRepository produtoRepository, CategoriaAgg.ICategoriaRepository categoriaRepository, IUnitOfWork uow, IMediator mediator) : base(uow, mediator)
        {
            this._produtoRepository = produtoRepository;
            this._categoriaRepository = categoriaRepository;
        }
        public Task<bool> Handle(AtualizarProdutoCommand request, CancellationToken cancellationToken)
        {
            var categoria = _categoriaRepository.Obter(request.Categoria);
            var produto = _produtoRepository.Obter(request.Id);
            produto.Atualizar(request.Nome, request.Descricao, categoria, request.Preco);
            _produtoRepository.Atualizar(produto);

            Commit();

            return Task.FromResult(true);
        }
    }
}
