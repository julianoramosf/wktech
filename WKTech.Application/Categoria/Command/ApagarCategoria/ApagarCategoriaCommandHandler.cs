using MediatR;
using WKTech.Application.Categoria.Command.AtualizarCategoria;
using WKTech.Domain.CategoriaAggregate;
using WKTech.Infra.Data.UoW;
using System;
using System.Threading;
using System.Threading.Tasks;
using CategoriaAgg = WKTech.Domain.CategoriaAggregate;

namespace WKTech.Application.Categoria.Command.ApagarCategoria
{
    public class ApagarCategoriaCommandHandler : CommandHandler, IRequestHandler<ApagarCategoriaCommand, bool>
    {
        private readonly ICategoriaRepository _categoriaRepository;

        public ApagarCategoriaCommandHandler(CategoriaAgg.ICategoriaRepository categoriaRepository, IUnitOfWork uow, IMediator mediator) : base(uow, mediator)
        {
            this._categoriaRepository = categoriaRepository;
        }
        public Task<bool> Handle(ApagarCategoriaCommand request, CancellationToken cancellationToken)
        {
            var categoria = _categoriaRepository.Obter(request.Id);
            _categoriaRepository.Excluir(categoria);

            Commit();

            return Task.FromResult(true);
        }
    }
}
