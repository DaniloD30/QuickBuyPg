using System;
using System.Collections.Generic;
using System.Text;

namespace QuickBuy.Dominio.Entidades
{
    public class Usuario : Entidade
    {
        public int Id { get; set; }
        public string Email { get; set; }
        public string Senha  { get; set; }
        public string Nome { get; set; }
        public string SobreNome { get; set; }
        /// <summary>
        /// Um Usuario pode ter nenhum ou muitos pedidos
        /// </summary>
        public virtual ICollection<Pedido> Pedidos { get; set; }

        public override void Validate()
        {
            LimparMensagensValidacao();
            
            if (string.IsNullOrEmpty(Senha))
                AdicionarCritica("Senha não foi informada");

            if (string.IsNullOrEmpty(Email))
                AdicionarCritica("O Email não foi informado");
        }
    }
}
