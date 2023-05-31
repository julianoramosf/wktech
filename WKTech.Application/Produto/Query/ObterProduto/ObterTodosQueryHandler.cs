using AutoMapper;
using MediatR;
using WKTech.Domain.ProdutoAggregate;
using System.Collections.Generic;
using System.Threading;
using System.Threading.Tasks;
using ProdutoAgg = WKTech.Domain.ProdutoAggregate;

namespace WKTech.Application.Produto.Query.ObterProduto
{
    public class ObterTodosQueryHandler : IRequestHandler<ObterTodosQuery, List<ObterProdutoViewModel>>
    {
        private readonly IProdutoRepository produtoRepository;
        private readonly IMapper mapper;

        public ObterTodosQueryHandler(IProdutoRepository produtoRepository, IMapper mapper)
        {
            this.produtoRepository = produtoRepository;
            this.mapper = mapper;
        }
        public Task<List<ObterProdutoViewModel>> Handle(ObterTodosQuery request, CancellationToken cancellationToken)
        {
            var produto = produtoRepository.Lista();
            var produtoViewModel = mapper.Map<List<ObterProdutoViewModel>>(produto);

            return Task.FromResult(produtoViewModel);
        }
    }
}
