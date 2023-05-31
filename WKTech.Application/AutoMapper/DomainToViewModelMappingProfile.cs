using AutoMapper;
using WKTech.Application.Produto.Query.ObterProduto;
using WKTech.Application.Categoria.Query.ObterCategoria;
using ProdutoAgg = WKTech.Domain.ProdutoAggregate;
using CategoriaAgg = WKTech.Domain.CategoriaAggregate;

namespace WKTech.Application.AutoMapper
{
    public class DomainToViewModelMappingProfile : Profile
    {
        public DomainToViewModelMappingProfile()
        {
            CreateMap<ProdutoAgg.Produto, ObterProdutoViewModel>();
            CreateMap<CategoriaAgg.Categoria, ObterCategoriaViewModel>();
        }
    }
}
