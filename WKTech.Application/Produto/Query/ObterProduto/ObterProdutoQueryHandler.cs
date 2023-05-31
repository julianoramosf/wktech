using AutoMapper;
using MediatR;
using WKTech.Domain.ProdutoAggregate;
using System.Threading;
using System.Threading.Tasks;
using ProdutoAgg = WKTech.Domain.ProdutoAggregate;

namespace WKTech.Application.Produto.Query.ObterProduto
{
    public class ObterProdutoQueryHandler : IRequestHandler<ObterProdutoQuery, ObterProdutoViewModel>
    {
        private readonly IProdutoRepository produtoRepository;
        private readonly IMapper mapper;

        public ObterProdutoQueryHandler(IProdutoRepository produtoRepository, IMapper mapper)
        {
            this.produtoRepository = produtoRepository;
            this.mapper = mapper;
        }
        public Task<ObterProdutoViewModel> Handle(ObterProdutoQuery request, CancellationToken cancellationToken)
        {
            var produto = produtoRepository.Obter(request.Id);
            var produtoViewModel = mapper.Map<ObterProdutoViewModel>(produto);

            return Task.FromResult(produtoViewModel);
        }
    }
}
