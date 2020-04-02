using System;
using System.Collections.Generic;

namespace SongMania.Models
{
    public partial class UserTable
    {
        public int Id { get; set; }
        public string Name { get; set; }
        public string Email { get; set; }
        public int CityId { get; set; }

        public virtual CityTable City { get; set; }
    }
}
