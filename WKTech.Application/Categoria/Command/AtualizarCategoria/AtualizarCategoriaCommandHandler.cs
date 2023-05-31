using MediatR;
using WKTech.Application.Categoria.Command.AtualizarCategoria;
using WKTech.Domain.CategoriaAggregate;
using WKTech.Infra.Data.UoW;
using System;
using System.Threading;
using System.Threading.Tasks;
using CategoriaAgg = WKTech.Domain.CategoriaAggregate;

namespace WKTech.Application.Categoria.Command.AtualizarCategoria
{
    public class AtualizarCategoriaCommandHandler : CommandHandler, IRequestHandler<AtualizarCategoriaCommand, bool>
    {
        private readonly ICategoriaRepository _categoriaRepository;

        public AtualizarCategoriaCommandHandler(CategoriaAgg.ICategoriaRepository categoriaRepository, IUnitOfWork uow, IMediator mediator) : base(uow, mediator)
        {
            this._categoriaRepository = categoriaRepository;
        }
        public Task<bool> Handle(AtualizarCategoriaCommand request, CancellationToken cancellationToken)
        {
            var categoria = _categoriaRepository.Obter(request.Id);
            categoria.Nome = request.Nome;
            _categoriaRepository.Atualizar(categoria);

            Commit();
          
            return Task.FromResult(true);
        }
    }
}
