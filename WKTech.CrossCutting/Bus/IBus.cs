using WKTech.CrossCutting.Bus.Command;
using WKTech.CrossCutting.Bus.Event;
using System.Threading.Tasks;

namespace WKTech.CrossCutting.Bus
{
    public interface IBus
    {
        Task SendCommand<T>(ICommand<T> command);
        Task RaiseEvent(IEvent @event);
    }
}
