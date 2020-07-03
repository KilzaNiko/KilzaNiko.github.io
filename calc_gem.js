// set percentage 20%
const per_atk_hp_def = 1.2;
const per_rec = 1.25;

// rank gem
const gem6 = 0.68;

// debuff's
const debuff_def = 0.7;
const debuff_shock = 0.5;
const debuff_atk = 0.5;

// buff's
const buff_def = 0.7;
const buff_atk = 0.5;

// elemental atk multiplier
const advantage = 1.5;
const disadvantage = 0.5;

// functions
const add_gem = (stat = 0, gem, cgem) => {
  const calc = cgem === 1 ? (stat * gem) + stat : ((stat * gem) * cgem) + stat ;
  return Math.round(calc);
};
const add_set = (stat = 0, percentage = 0, stat_add = 0) => {
  const calc = stat * percentage + stat_add
  return Math.round(calc);
};
const debuff = (stat = 0, debuff) => {
  const calc = stat - stat * debuff;
  return Math.round(calc);
};
const buff = (stat = 0, buff) => {
  const calc = stat + stat * buff;
  return Math.round(calc);
};
const ele_multiplier = (atk = 0, multiplier) => {
  const calc = multiplier === 0.5 ? atk - atk * multiplier : atk * multiplier
  return Math.round(calc);
};

const app = new Vue ({
  el: '#app',
  data: {
    // Inputs
    atk_i:  '',
    hp_i:   '',
    def_i:  '',
    rec_i:  ''
  },
  computed: {
    //#region TABLE "Stats without ATK/HP/DEF/REC set"

      // attack
      atk_added_x1(){
        return add_gem(parseInt(this.atk_i), gem6, 1)
      },
      atk_added_x2(){
        return add_gem(parseInt(this.atk_i), gem6, 2)
      },
      atk_added_x3(){
        return add_gem(parseInt(this.atk_i), gem6, 3)
      },

      // hp
      hp_added_x1(){
        return add_gem(parseInt(this.hp_i), gem6, 1)
      },
      hp_added_x2(){
        return add_gem(parseInt(this.hp_i), gem6, 2)
      },
      hp_added_x3(){
        return add_gem(parseInt(this.hp_i), gem6, 3)
      },

      // def
      def_added_x1(){
        return add_gem(parseInt(this.def_i), gem6, 1)
      },
      def_added_x2(){
        return add_gem(parseInt(this.def_i), gem6, 2)
      },
      def_added_x3(){
        return add_gem(parseInt(this.def_i), gem6, 3)
      },

      // rec
      rec_added_x1(){
        return add_gem(parseInt(this.rec_i), gem6, 1)
      },
      rec_added_x2(){
        return add_gem(parseInt(this.rec_i), gem6, 2)
      },
      rec_added_x3(){
        return add_gem(parseInt(this.rec_i), gem6, 3)
      },
    //#endregion -^
    
    //#region TABLE "Stats with ATK/HP/DEF/REC set"

      // attack
      atk_set_added(){
        return add_set(this.atk_i, per_atk_hp_def)
      },
      atk_set_added_x1(){
        return add_set(this.atk_i, per_atk_hp_def, this.atk_added_x1)
      },
      atk_set_added_x2(){
        return add_set(this.atk_i, per_atk_hp_def, this.atk_added_x2)
      },
      atk_set_added_x3(){
        return add_set(this.atk_i, per_atk_hp_def, this.atk_added_x3)
      },
      
      // hp
      hp_set_added(){
        return add_set(this.hp_i, per_atk_hp_def)
      },
      hp_set_added_x1(){
        return add_set(this.hp_i, per_atk_hp_def, this.hp_added_x1)
      },
      hp_set_added_x2(){
        return add_set(this.hp_i, per_atk_hp_def, this.hp_added_x2)
      },
      hp_set_added_x3(){
        return add_set(this.hp_i, per_atk_hp_def, this.hp_added_x3)
      },

      // def
      def_set_added(){
        return add_set(this.def_i, per_atk_hp_def)
      },
      def_set_added_x1(){
        return add_set(this.def_i, per_atk_hp_def, this.def_added_x1)
      },
      def_set_added_x2(){
        return add_set(this.def_i, per_atk_hp_def, this.def_added_x2)
      },
      def_set_added_x3(){
        return add_set(this.def_i, per_atk_hp_def, this.def_added_x3)
      },

      // rec
      rec_set_added(){
        return add_set(this.rec_i, per_rec)
      },
      rec_set_added_x1(){
        return add_set(this.rec_i, per_rec, this.rec_added_x1)
      },
      rec_set_added_x2(){
        return add_set(this.rec_i, per_rec, this.rec_added_x2)
      },
      rec_set_added_x3(){
        return add_set(this.rec_i, per_rec, this.rec_added_x3)
      },
    //#endregion -^

    //#region TABLE "Debuff Shock"

      //with defense set
      shock_debuff_ws(){
        return debuff(this.def_set_added, debuff_shock)
      },
      shock_debuff_ws_x1(){
        return debuff(this.def_set_added_x1, debuff_shock)
      },
      shock_debuff_ws_x2(){
        return debuff(this.def_set_added_x2, debuff_shock)
      },
      shock_debuff_ws_x3(){
        return debuff(this.def_set_added_x3, debuff_shock)
      },

      //with defense set
      shock_debuff_wos(){
        return debuff(this.def_i, debuff_shock)
      },
      shock_debuff_wos_x1(){
        return debuff(this.def_added_x1, debuff_shock)
      },
      shock_debuff_wos_x2(){
        return debuff(this.def_added_x2, debuff_shock)
      },
      shock_debuff_wos_x3(){
        return debuff(this.def_added_x3, debuff_shock)
      },
    //#endregion -^

    //#region TABLE "Debuff Defense Down"

      //with defense set
      def_debuff_ws(){
        return debuff(this.def_set_added, debuff_def)
      },
      def_debuff_ws_x1(){
        return debuff(this.def_set_added_x1, debuff_def)
      },
      def_debuff_ws_x2(){
        return debuff(this.def_set_added_x2, debuff_def)
      },
      def_debuff_ws_x3(){
        return debuff(this.def_set_added_x3, debuff_def)
      },

      //with defense set
      def_debuff_wos(){
        return debuff(this.def_i, debuff_def)
      },
      def_debuff_wos_x1(){
        return debuff(this.def_added_x1, debuff_def)
      },
      def_debuff_wos_x2(){
        return debuff(this.def_added_x2, debuff_def)
      },
      def_debuff_wos_x3(){
        return debuff(this.def_added_x3, debuff_def)
      },
    //#endregion -^

    //#region TABLE "Buff Defense Up"

      //with defense set
      def_buff_ws(){
        return buff(this.def_set_added, buff_def)
      },
      def_buff_ws_x1(){
        return buff(this.def_set_added_x1, buff_def)
      },
      def_buff_ws_x2(){
        return buff(this.def_set_added_x2, buff_def)
      },
      def_buff_ws_x3(){
        return buff(this.def_set_added_x3, buff_def)
      },

      //without defense set
      def_buff_wos(){
        return buff(parseInt(this.def_i), buff_def)
      },
      def_buff_wos_x1(){
        return buff(this.def_added_x1, buff_def)
      },
      def_buff_wos_x2(){
        return buff(this.def_added_x2, buff_def)
      },
      def_buff_wos_x3(){
        return buff(this.def_added_x3, buff_def)
      },
    //#endregion -^

    //#region TABLE "Debuff Attack Down"

      //with attack set
      atk_debuff_ws(){
        return debuff(this.atk_set_added, debuff_atk)
      },
      atk_debuff_ws_x1(){
        return debuff(this.atk_set_added_x1, debuff_atk)
      },
      atk_debuff_ws_x2(){
        return debuff(this.atk_set_added_x2, debuff_atk)
      },
      atk_debuff_ws_x3(){
        return debuff(this.atk_set_added_x3, debuff_atk)
      },

      //without attack set
      atk_debuff_wos(){
        return debuff(this.atk_i, debuff_atk)
      },
      atk_debuff_wos_x1(){
        return debuff(this.atk_added_x1, debuff_atk)
      },
      atk_debuff_wos_x2(){
        return debuff(this.atk_added_x2, debuff_atk)
      },
      atk_debuff_wos_x3(){
        return debuff(this.atk_added_x3, debuff_atk)
      },
    //#endregion -^

    //#region TABLE "Buff Attack Up"

      //with attack set
      atk_buff_ws(){
        return buff(this.atk_set_added, buff_atk)
      },
      atk_buff_ws_x1(){
        return buff(this.atk_set_added_x1, buff_atk)
      },
      atk_buff_ws_x2(){
        return buff(this.atk_set_added_x2, buff_atk)
      },
      atk_buff_ws_x3(){
        return buff(this.atk_set_added_x3, buff_atk)
      },

      //without attack set
      atk_buff_wos(){
        return buff(parseInt(this.atk_i), buff_atk)
      },
      atk_buff_wos_x1(){
        return buff(this.atk_added_x1, buff_atk)
      },
      atk_buff_wos_x2(){
        return buff(this.atk_added_x2, buff_atk)
      },
      atk_buff_wos_x3(){
        return buff(this.atk_added_x3, buff_atk)
      },
    //#endregion -^

    //#region TABLE "Elemental Multiplier Advantage"

      // advantage elemental ATK multiplier with attack set
      atk_advantage_ws(){
        return ele_multiplier(this.atk_set_added, advantage);
      }, 
      atk_advantage_ws_x1(){
        return ele_multiplier(this.atk_set_added_x1, advantage);
      }, 
      atk_advantage_ws_x2(){
        return ele_multiplier(this.atk_set_added_x2, advantage);
      }, 
      atk_advantage_ws_x3(){
        return ele_multiplier(this.atk_set_added_x3, advantage);
      },

      // advantage elemental ATK multiplier without attack set
      atk_advantage_wos(){
        return ele_multiplier(this.atk_i, advantage);
      }, 
      atk_advantage_wos_x1(){
        return ele_multiplier(this.atk_added_x1, advantage);
      }, 
      atk_advantage_wos_x2(){
        return ele_multiplier(this.atk_added_x2, advantage);
      }, 
      atk_advantage_wos_x3(){
        return ele_multiplier(this.atk_added_x3, advantage);
      },
    //#endregion

    //#region TABLE "Elemental Multiplier Disadvantage"

      // disadvantage elemental ATK multiplier with attack set
      atk_disadvantage_ws(){
        return ele_multiplier(this.atk_set_added, disadvantage);
      }, 
      atk_disadvantage_ws_x1(){
        return ele_multiplier(this.atk_set_added_x1, disadvantage);
      }, 
      atk_disadvantage_ws_x2(){
        return ele_multiplier(this.atk_set_added_x2, disadvantage);
      }, 
      atk_disadvantage_ws_x3(){
        return ele_multiplier(this.atk_set_added_x3, disadvantage);
      },

      // disadvantage elemental ATK multiplier without attack set
      atk_disadvantage_wos(){
        return ele_multiplier(this.atk_i, disadvantage);
      }, 
      atk_disadvantage_wos_x1(){
        return ele_multiplier(this.atk_added_x1, disadvantage);
      }, 
      atk_disadvantage_wos_x2(){
        return ele_multiplier(this.atk_added_x2, disadvantage);
      }, 
      atk_disadvantage_wos_x3(){
        return ele_multiplier(this.atk_added_x3, disadvantage);
      },
    //#endregion
  }
})