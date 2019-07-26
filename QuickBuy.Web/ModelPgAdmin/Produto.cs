using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;
using System.Text;

namespace QuickBuy.Web.ModelPgAdmin
{
    public class Produto 
    {   
        [Key]
        [DatabaseGenerated(DatabaseGeneratedOption.Identity)]
        public int Id { get; set; }
        public string Nome { get; set; }
        public string Descricao { get; set; }
        public decimal Preco { get; set; }

        public  void Validate()
        {
            throw new NotImplementedException();
        }
    }
    /* [Key]
        [DatabaseGenerated(DatabaseGeneratedOption.Identity)]
        public int id {get;set;}
        [Required]
        [Column(TypeName="character varying(200)")]
        public string name {get;set;} */
}
