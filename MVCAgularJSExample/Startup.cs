using Microsoft.Owin;
using Owin;

[assembly: OwinStartupAttribute(typeof(MVCAgularJSExample.Startup))]
namespace MVCAgularJSExample
{
    public partial class Startup
    {
        public void Configuration(IAppBuilder app)
        {
            ConfigureAuth(app);
        }
    }
}
