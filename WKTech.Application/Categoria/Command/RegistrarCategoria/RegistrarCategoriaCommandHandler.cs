using MediatR;
using WKTech.Infra.Data.UoW;
using System;
using System.Threading;
using System.Threading.Tasks;
using CategoriaAgg = WKTech.Domain.CategoriaAggregate;

namespace WKTech.Application.Categoria.Command.RegistrarCategoria
{
    public class RegistrarCategoriaCommandHandler : CommandHandler, IRequestHandler<RegistrarCategoriaCommand, bool>
    {
        private readonly CategoriaAgg.ICategoriaRepository categoriaRepository;

        public RegistrarCategoriaCommandHandler(CategoriaAgg.ICategoriaRepository categoriaRepository, IUnitOfWork uow, IMediator mediator) : base(uow, mediator)
        {
            this.categoriaRepository = categoriaRepository;
        }

        public Task<bool> Handle(RegistrarCategoriaCommand request, CancellationToken cancellationToken)
        {
            var categoria = new CategoriaAgg.Categoria(request.Nome);
            categoriaRepository.Registrar(categoria);
            Commit();
            return Task.FromResult(true);
        }
    }
}
