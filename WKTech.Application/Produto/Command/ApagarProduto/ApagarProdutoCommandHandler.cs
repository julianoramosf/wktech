using MediatR;
using WKTech.Domain.ProdutoAggregate;
using WKTech.Infra.Data.UoW;
using System;
using System.Threading;
using System.Threading.Tasks;
using ProdutoAgg = WKTech.Domain.ProdutoAggregate;
using CategoriaAgg = WKTech.Domain.CategoriaAggregate;

namespace WKTech.Application.Produto.Command.ApagarProduto
{
    public class ApagarProdutoCommandHandler : CommandHandler, IRequestHandler<ApagarProdutoCommand, bool>
    {
        private readonly IProdutoRepository _produtoRepository;
        private readonly CategoriaAgg.ICategoriaRepository _categoriaRepository;
        public ApagarProdutoCommandHandler(ProdutoAgg.IProdutoRepository produtoRepository, CategoriaAgg.ICategoriaRepository categoriaRepository, IUnitOfWork uow, IMediator mediator) : base(uow, mediator)
        {
            this._produtoRepository = produtoRepository;
            this._categoriaRepository = categoriaRepository;
        }
        public Task<bool> Handle(ApagarProdutoCommand request, CancellationToken cancellationToken)
        {
            var produto = _produtoRepository.Obter(request.Id);
            _produtoRepository.Excluir(produto);

            Commit();

            return Task.FromResult(true);
        }
    }
}
