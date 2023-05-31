using MediatR;
using WKTech.CrossCutting.Bus.Command;
using WKTech.CrossCutting.Bus.Event;
using System.Threading.Tasks;

namespace WKTech.CrossCutting.Bus
{
    public class InMemoryBus : IBus
    {
        private readonly IMediator _mediator;

        public InMemoryBus(IMediator mediator)
        {
            this._mediator = mediator;
        }

        public Task RaiseEvent(IEvent @event)
        {
            return _mediator.Publish(@event);
        }

        public Task SendCommand<T>(ICommand<T> command)
        {
            return _mediator.Send(command);
        }
    }
}
