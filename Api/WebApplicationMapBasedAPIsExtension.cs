using Microsoft.AspNetCore.Mvc;
using MiniValidation;


    public static class WebApplicationMapBasedAPIsExtension
    {
        public static void MapWebBasedAPIs(this WebApplication app)
        {
           app.MapGet("/MapBasedAPIs", (IHouseRepository repo) => repo.GetAll())
            .Produces<HouseDto[]>(StatusCodes.Status200OK);
        }
    }
