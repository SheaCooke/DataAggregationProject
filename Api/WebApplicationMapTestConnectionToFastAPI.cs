
using Microsoft.AspNetCore.Mvc;
using MiniValidation;


    public static class WebApplicationMapTestConnectionToFastAPI
    {
        public static void MapTestConnectionToFastAPI(this WebApplication app)
        {
           app.MapGet("/testConnectionToFastAPI", () => GetRequestAsync())
            .Produces<string[]>(StatusCodes.Status200OK);
        }


        private async static Task<string> GetRequestAsync()
            {                   
                try
                {
                    using (HttpClient client = new HttpClient())
                    {                                                          
                        HttpResponseMessage response = await client.GetAsync("http://127.0.0.1:8000/testConnection");

                        response.EnsureSuccessStatusCode();

                        string responseBody = await response.Content.ReadAsStringAsync();
             
                        return responseBody;
                    }
                }
                catch (Exception e)
                {        
                    throw e;
                }

            }
     }
