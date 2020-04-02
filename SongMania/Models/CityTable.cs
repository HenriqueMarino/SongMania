using System;
using System.Collections.Generic;

namespace SongMania.Models
{
    public partial class CityTable
    {
        public CityTable()
        {
            UserTable = new HashSet<UserTable>();
        }

        public int Id { get; set; }
        public string CityName { get; set; }

        public virtual ICollection<UserTable> UserTable { get; set; }
    }
}
