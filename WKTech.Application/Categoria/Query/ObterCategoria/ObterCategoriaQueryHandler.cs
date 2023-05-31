using AutoMapper;
using MediatR;
using WKTech.Domain.CategoriaAggregate;
using System.Threading;
using System.Threading.Tasks;
using CategoriaAgg = WKTech.Domain.CategoriaAggregate;
using System;

namespace WKTech.Application.Categoria.Query.ObterCategoria
{
    public class ObterCategoriaQueryHandler : IRequestHandler<ObterCategoriaQuery, ObterCategoriaViewModel>
    {
        private readonly ICategoriaRepository categoriaRepository;
        private readonly IMapper mapper;

        public ObterCategoriaQueryHandler(ICategoriaRepository categoriaRepository, IMapper mapper)
        {
            this.categoriaRepository = categoriaRepository;
            this.mapper = mapper;
        }
        public Task<ObterCategoriaViewModel> Handle(ObterCategoriaQuery request, CancellationToken cancellationToken)
        {
            var categoria = new CategoriaAgg.Categoria();

            if(request.Id != Guid.Empty)
                 categoria = categoriaRepository.Obter(request.Id);
            else if(request.Nome is not null)
                 categoria = categoriaRepository.ObterPeloNome(request.Nome);

            var categoriaViewModel = mapper.Map<ObterCategoriaViewModel>(categoria);

            return Task.FromResult(categoriaViewModel);
        }
    }
}
