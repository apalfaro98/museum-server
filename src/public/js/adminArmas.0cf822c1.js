"use strict";(self["webpackChunkcliente"]=self["webpackChunkcliente"]||[]).push([[992],{9874:function(e,t,a){a.r(t),a.d(t,{default:function(){return C}});var i=a(7359),s=a(6190),o=a(4145),n=a(4886),d=a(5151),r=a(4061),l=a(9223),c=a(4324),m=a(7394),u=a(3687),h=a(6313),f=a(7953),I=function(){var e=this,t=e._self._c;return t("div",[t(m.xy,[e.success?t(i.Z,{staticClass:"alert",attrs:{prominent:"",shaped:"",type:"success","max-width":"300px",dismissible:""},on:{click:function(t){e.success=!1}}},[e._v("Armas guardadada exitosamente.")]):e._e()],1),t(d.Z,{staticClass:"elevation-1 mt-2",attrs:{headers:e.headers,items:e.datos,"items-per-page":-1,"hide-default-footer":""},scopedSlots:e._u([{key:"top",fn:function(){return[t(h.Z,{attrs:{flat:""}},[t(f.qW,[t(c.Z,{staticClass:"mr-1"},[e._v("mdi-sword-cross")]),e._v(" Armas ")],1),t(l.Z,{staticClass:"mx-4",attrs:{inset:"",vertical:""}}),t(u.Z),t(r.Z,{attrs:{"max-width":"1000"},model:{value:e.dialogInfo,callback:function(t){e.dialogInfo=t},expression:"dialogInfo"}},[t(o.Z,{staticClass:"pa-4"},[t(n.ZB,[t("arma-dialog",{attrs:{editedItem:e.infoItem}})],1),t(n.h7,[t(u.Z),t(s.Z,{attrs:{color:"red darken-1",text:""},on:{click:e.closeInfo}},[e._v(" Cerrar ")])],1)],1)],1),t(r.Z,{attrs:{"max-width":"1000"},scopedSlots:e._u([{key:"activator",fn:function({on:a,attrs:i}){return[t(s.Z,e._g(e._b({staticClass:"mb-2",attrs:{color:"primary",dark:""}},"v-btn",i,!1),a),[e._v(" Registrar Arma ")])]}}]),model:{value:e.dialog,callback:function(t){e.dialog=t},expression:"dialog"}},[t("arma-create-edit",{attrs:{formTitle:e.formTitle,editedItem:e.editedItem,isNew:e.isNew},on:{close:e.close,reload:e.reload}})],1),t(r.Z,{attrs:{"max-width":"600px"},model:{value:e.dialogDelete,callback:function(t){e.dialogDelete=t},expression:"dialogDelete"}},[t(o.Z,[t(n.EB,{staticClass:"text-h5"},[e._v("¿Está seguro que desea eliminar este artículo?")]),t(n.h7,[t(u.Z),t(s.Z,{attrs:{color:"blue darken-1",text:""},on:{click:e.closeDelete}},[e._v("Cancelar")]),t(s.Z,{attrs:{color:"blue darken-1",text:""},on:{click:e.deleteItemConfirm}},[e._v("Aceptar")]),t(u.Z)],1)],1)],1)],1)]},proxy:!0},{key:"item.actions",fn:function({item:a}){return[t("div",{staticClass:"d-flex justify-around"},[t(c.Z,{staticClass:"mr-2",attrs:{small:""},on:{click:function(t){return e.detailsItem(a)}}},[e._v(" mdi-information ")]),t(c.Z,{staticClass:"mr-2",attrs:{small:""},on:{click:function(t){return e.editItem(a)}}},[e._v(" mdi-pencil ")]),t(c.Z,{attrs:{small:""},on:{click:function(t){return e.deleteItem(a)}}},[e._v(" mdi-delete ")])],1)]}}])})],1)},g=[],x=a(1696),p=a(3382),v=a(5648),b={data:()=>({datos:[],dialog:!1,dialogInfo:!1,dialogDelete:!1,isNew:!0,success:!1,headers:[{text:"INST/PROPIETARIO",value:"propietario"},{text:"CODIGO",value:"codigo"},{text:"NO.INVENTARIO",value:"noInventario"},{text:"REGISTRO DE ENTRADA",value:"registroEntrada"},{text:"DENOMINACIÓN",value:"denominacion"},{text:"MANIFESTACIÓN",value:"manifestacion"},{text:"ESTADO",value:"estado"},{text:"GRADO DE VALOR",align:"center",value:"gradoDeValor"},{text:"ACCIONES",value:"actions",sortable:!1,align:"center"}],editedIndex:-1,editedItem:{propietario:"",codigo:"",noInventario:"",cantidad:1,manifestacion:"",denominacion:"",fabrica:"",noSerie:"",ciudadPais:"",anio:0,epoca:"",alto:"",ancho:"",profundidad:"",calibre:"",materiales:"",mar:"",anx:"",sis:"",dec:"",ubicacion:"",estado:"",valor:"",gradoDeValor:"",origen:"",personalidad:"",acontecimiento:"",tasacion:"",expediente:"",notas:"",prestado:!1,recibido:!1},infoItem:{},defaultItem:{propietario:"",codigo:"",noInventario:"",cantidad:1,manifestacion:"",denominacion:"",fabrica:"",noSerie:"",ciudadPais:"",anio:0,epoca:"",alto:"",ancho:"",profundidad:"",calibre:"",materiales:"",mar:"",anx:"",sis:"",dec:"",ubicacion:"",estado:"",valor:"",gradoDeValor:"",origen:"",personalidad:"",acontecimiento:"",tasacion:"",expediente:"",notas:"",prestado:!1,recibido:!1}}),components:{ArmaDialog:p.Z,ArmaCreateEdit:v.Z},computed:{formTitle(){return-1===this.editedIndex?"Registrar Arma":"Editar Arma"}},watch:{dialog(e){e||this.close()},dialogDelete(e){e||this.closeDelete()}},mounted(){this.requestData()},methods:{requestData(){x.Z.getArmas().then((e=>{this.datos=e,this.datos.forEach((e=>{e.registroEntrada=e.registroEntrada.slice(0,10)}))})).catch((e=>console.log))},reload(){this.close(),this.success=!0,this.requestData()},detailsItem(e){this.success=!1,this.editedIndex=this.datos.indexOf(e),this.infoItem=Object.assign({},e),this.dialogInfo=!0},editItem(e){this.success=!1,this.isNew=!1,this.editedIndex=this.datos.indexOf(e),this.editedItem=Object.assign({},e),this.dialog=!0},deleteItem(e){this.success=!1,this.editedIndex=this.datos.indexOf(e),this.editedItem=Object.assign({},e),this.dialogDelete=!0},deleteItemConfirm(){x.Z.deleteArma(this.editedItem._id).then((e=>{console.log(e),this.closeDelete(),this.requestData()})).catch((e=>{console.log(e.response)}))},close(){this.dialog=!1,this.$nextTick((()=>{this.editedItem=Object.assign({},this.defaultItem),this.editedIndex=-1}))},closeInfo(){this.dialogInfo=!1,this.$nextTick((()=>{this.infoItem=Object.assign({}),this.editedIndex=-1}))},closeDelete(){this.dialogDelete=!1,this.$nextTick((()=>{this.editedItem=Object.assign({},this.defaultItem),this.editedIndex=-1}))}}},Z=b,D=a(1001),k=(0,D.Z)(Z,I,g,!1,null,"12bf049e",null),C=k.exports}}]);
//# sourceMappingURL=adminArmas.0cf822c1.js.map