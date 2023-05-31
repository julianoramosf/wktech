using MediatR;
using WKTech.Infra.Data.UoW;
using System;
using System.Threading;
using System.Threading.Tasks;
using ProdutoAgg = WKTech.Domain.ProdutoAggregate;
using CategoriaAgg = WKTech.Domain.CategoriaAggregate;


namespace WKTech.Application.Produto.Command.RegistrarProduto
{
    public class RegistrarProdutoCommandHandler : CommandHandler, IRequestHandler<RegistrarProdutoCommand, bool>
    {
        private readonly ProdutoAgg.IProdutoRepository _produtoRepository;

        private readonly CategoriaAgg.ICategoriaRepository _categoriaRepository;

        public RegistrarProdutoCommandHandler(ProdutoAgg.IProdutoRepository produtoRepository, CategoriaAgg.ICategoriaRepository categoriaRepository,  IUnitOfWork uow, IMediator mediator) : base(uow, mediator)
        {
            this._produtoRepository = produtoRepository;
            this._categoriaRepository = categoriaRepository;
        }

        public Task<bool> Handle(RegistrarProdutoCommand request, CancellationToken cancellationToken)
        {

            var categoria = _categoriaRepository.Obter(request.Categoria);

            var produto = new ProdutoAgg.Produto(request.Nome, request.Descricao, categoria, request.Preco);
            _produtoRepository.Registrar(produto);

             Commit();
            
            return Task.FromResult(true);
        }
    }
}
