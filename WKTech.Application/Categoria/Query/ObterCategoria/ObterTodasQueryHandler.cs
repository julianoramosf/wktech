using AutoMapper;
using MediatR;
using WKTech.Domain.CategoriaAggregate;
using System.Collections.Generic;
using System.Threading;
using System.Threading.Tasks;
using CategoriaAgg = WKTech.Domain.CategoriaAggregate;

namespace WKTech.Application.Categoria.Query.ObterCategoria
{
    public class ObterTodasQueryHandler : IRequestHandler<ObterTodasQuery, List<ObterCategoriaViewModel>>
    {
        private readonly ICategoriaRepository categoriaRepository;
        private readonly IMapper mapper;

        public ObterTodasQueryHandler(ICategoriaRepository categoriaRepository, IMapper mapper)
        {
            this.categoriaRepository = categoriaRepository;
            this.mapper = mapper;
        }
        public Task<List<ObterCategoriaViewModel>> Handle(ObterTodasQuery request, CancellationToken cancellationToken)
        {
            var categoria = categoriaRepository.Lista();
            var categoriaViewModel = mapper.Map<List<ObterCategoriaViewModel>>(categoria);

            return Task.FromResult(categoriaViewModel);
        }
    }
}
