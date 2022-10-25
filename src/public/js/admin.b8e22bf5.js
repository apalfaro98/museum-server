"use strict";(self["webpackChunkcliente"]=self["webpackChunkcliente"]||[]).push([[328,834,866],{9874:function(t,e,i){i.r(e),i.d(e,{default:function(){return C}});var s=i(7359),a=i(6190),o=i(4145),n=i(4886),r=i(5151),l=i(4061),c=i(9223),d=i(4324),h=i(7394),u=i(3687),m=i(6313),p=i(7953),v=function(){var t=this,e=t._self._c;return e("div",[e(h.xy,[t.success?e(s.Z,{staticClass:"alert",attrs:{prominent:"",shaped:"",type:"success","max-width":"300px",dismissible:""},on:{click:function(e){t.success=!1}}},[t._v("Armas guardadada exitosamente.")]):t._e()],1),e(r.Z,{staticClass:"elevation-1 mt-2",attrs:{headers:t.headers,items:t.datos,"items-per-page":-1,"hide-default-footer":""},scopedSlots:t._u([{key:"top",fn:function(){return[e(m.Z,{attrs:{flat:""}},[e(p.qW,[e(d.Z,{staticClass:"mr-1"},[t._v("mdi-sword-cross")]),t._v(" Armas ")],1),e(c.Z,{staticClass:"mx-4",attrs:{inset:"",vertical:""}}),e(u.Z),e(l.Z,{attrs:{"max-width":"1000"},model:{value:t.dialogInfo,callback:function(e){t.dialogInfo=e},expression:"dialogInfo"}},[e(o.Z,{staticClass:"pa-4"},[e(n.ZB,[e("arma-dialog",{attrs:{editedItem:t.infoItem}})],1),e(n.h7,[e(u.Z),e(a.Z,{attrs:{color:"red darken-1",text:""},on:{click:t.closeInfo}},[t._v(" Cerrar ")])],1)],1)],1),e(l.Z,{attrs:{"max-width":"1000"},scopedSlots:t._u([{key:"activator",fn:function({on:i,attrs:s}){return[e(a.Z,t._g(t._b({staticClass:"mb-2",attrs:{color:"primary",dark:""}},"v-btn",s,!1),i),[t._v(" Registrar Arma ")])]}}]),model:{value:t.dialog,callback:function(e){t.dialog=e},expression:"dialog"}},[e("arma-create-edit",{attrs:{formTitle:t.formTitle,editedItem:t.editedItem,isNew:t.isNew},on:{close:t.close,reload:t.reload}})],1),e(l.Z,{attrs:{"max-width":"600px"},model:{value:t.dialogDelete,callback:function(e){t.dialogDelete=e},expression:"dialogDelete"}},[e(o.Z,[e(n.EB,{staticClass:"text-h5"},[t._v("¿Está seguro que desea eliminar este artículo?")]),e(n.h7,[e(u.Z),e(a.Z,{attrs:{color:"blue darken-1",text:""},on:{click:t.closeDelete}},[t._v("Cancelar")]),e(a.Z,{attrs:{color:"blue darken-1",text:""},on:{click:t.deleteItemConfirm}},[t._v("Aceptar")]),e(u.Z)],1)],1)],1)],1)]},proxy:!0},{key:"item.actions",fn:function({item:i}){return[e("div",{staticClass:"d-flex justify-around"},[e(d.Z,{staticClass:"mr-2",attrs:{small:""},on:{click:function(e){return t.detailsItem(i)}}},[t._v(" mdi-information ")]),e(d.Z,{staticClass:"mr-2",attrs:{small:""},on:{click:function(e){return t.editItem(i)}}},[t._v(" mdi-pencil ")]),e(d.Z,{attrs:{small:""},on:{click:function(e){return t.deleteItem(i)}}},[t._v(" mdi-delete ")])],1)]}}])})],1)},f=[],g=i(1696),I=i(3382),x=i(5648),b={data:()=>({datos:[],dialog:!1,dialogInfo:!1,dialogDelete:!1,isNew:!0,success:!1,headers:[{text:"INST/PROPIETARIO",value:"propietario"},{text:"CODIGO",value:"codigo"},{text:"NO.INVENTARIO",value:"noInventario"},{text:"REGISTRO DE ENTRADA",value:"registroEntrada"},{text:"DENOMINACIÓN",value:"denominacion"},{text:"MANIFESTACIÓN",value:"manifestacion"},{text:"ESTADO",value:"estado"},{text:"GRADO DE VALOR",align:"center",value:"gradoDeValor"},{text:"ACCIONES",value:"actions",sortable:!1,align:"center"}],editedIndex:-1,editedItem:{propietario:"",codigo:"",noInventario:"",cantidad:1,manifestacion:"",denominacion:"",fabrica:"",noSerie:"",ciudadPais:"",anio:0,epoca:"",alto:"",ancho:"",profundidad:"",calibre:"",materiales:"",mar:"",anx:"",sis:"",dec:"",ubicacion:"",estado:"",valor:"",gradoDeValor:"",origen:"",personalidad:"",acontecimiento:"",tasacion:"",expediente:"",notas:"",prestado:!1,recibido:!1},infoItem:{},defaultItem:{propietario:"",codigo:"",noInventario:"",cantidad:1,manifestacion:"",denominacion:"",fabrica:"",noSerie:"",ciudadPais:"",anio:0,epoca:"",alto:"",ancho:"",profundidad:"",calibre:"",materiales:"",mar:"",anx:"",sis:"",dec:"",ubicacion:"",estado:"",valor:"",gradoDeValor:"",origen:"",personalidad:"",acontecimiento:"",tasacion:"",expediente:"",notas:"",prestado:!1,recibido:!1}}),components:{ArmaDialog:I.Z,ArmaCreateEdit:x.Z},computed:{formTitle(){return-1===this.editedIndex?"Registrar Arma":"Editar Arma"}},watch:{dialog(t){t||this.close()},dialogDelete(t){t||this.closeDelete()}},mounted(){this.requestData()},methods:{requestData(){g.Z.getArmas().then((t=>{this.datos=t,this.datos.forEach((t=>{t.registroEntrada=t.registroEntrada.slice(0,10)}))})).catch((t=>console.log))},reload(){this.close(),this.success=!0,this.requestData()},detailsItem(t){this.success=!1,this.editedIndex=this.datos.indexOf(t),this.infoItem=Object.assign({},t),this.dialogInfo=!0},editItem(t){this.success=!1,this.isNew=!1,this.editedIndex=this.datos.indexOf(t),this.editedItem=Object.assign({},t),this.dialog=!0},deleteItem(t){this.success=!1,this.editedIndex=this.datos.indexOf(t),this.editedItem=Object.assign({},t),this.dialogDelete=!0},deleteItemConfirm(){g.Z.deleteArma(this.editedItem._id).then((t=>{console.log(t),this.closeDelete(),this.requestData()})).catch((t=>{console.log(t.response)}))},close(){this.dialog=!1,this.$nextTick((()=>{this.editedItem=Object.assign({},this.defaultItem),this.editedIndex=-1}))},closeInfo(){this.dialogInfo=!1,this.$nextTick((()=>{this.infoItem=Object.assign({}),this.editedIndex=-1}))},closeDelete(){this.dialogDelete=!1,this.$nextTick((()=>{this.editedItem=Object.assign({},this.defaultItem),this.editedIndex=-1}))}}},Z=b,k=i(1001),A=(0,k.Z)(Z,v,f,!1,null,"12bf049e",null),C=A.exports},3792:function(t,e,i){i.r(e),i.d(e,{default:function(){return C}});var s=i(7359),a=i(6190),o=i(4145),n=i(4886),r=i(5151),l=i(4061),c=i(9223),d=i(4324),h=i(7394),u=i(3687),m=i(6313),p=i(7953),v=function(){var t=this,e=t._self._c;return e("div",[e(h.xy,[t.success?e(s.Z,{staticClass:"alert",attrs:{prominent:"",shaped:"",type:"success","max-width":"300px",dismissible:""},on:{click:function(e){t.success=!1}}},[t._v("Artículo guardadado exitosamente.")]):t._e()],1),e(r.Z,{staticClass:"elevation-1 mt-2",attrs:{headers:t.headers,items:t.datos,"items-per-page":-1,"hide-default-footer":""},scopedSlots:t._u([{key:"top",fn:function(){return[e(m.Z,{attrs:{flat:""}},[e(p.qW,[e(d.Z,{staticClass:"mr-1"},[t._v("mdi-sprout")]),t._v(" Naturales ")],1),e(c.Z,{staticClass:"mx-4",attrs:{inset:"",vertical:""}}),e(u.Z),e(l.Z,{attrs:{"max-width":"1000"},model:{value:t.dialogInfo,callback:function(e){t.dialogInfo=e},expression:"dialogInfo"}},[e(o.Z,{staticClass:"pa-4"},[e(n.ZB,[e("natural-dialog",{attrs:{editedItem:t.infoItem}})],1),e(n.h7,[e(u.Z),e(a.Z,{attrs:{color:"red darken-1",text:""},on:{click:t.closeInfo}},[t._v(" Cerrar ")])],1)],1)],1),e(l.Z,{attrs:{"max-width":"1000"},scopedSlots:t._u([{key:"activator",fn:function({on:i,attrs:s}){return[e(a.Z,t._g(t._b({staticClass:"mb-2",attrs:{color:"primary",dark:""},on:{click:function(e){t.isNew=!0}}},"v-btn",s,!1),i),[t._v(" Registrar Artículo ")])]}}]),model:{value:t.dialog,callback:function(e){t.dialog=e},expression:"dialog"}},[e("natural-create-edit",{attrs:{formTitle:t.formTitle,editedItem:t.editedItem,isNew:t.isNew},on:{close:t.close,reload:t.reload}})],1),e(l.Z,{attrs:{"max-width":"600px"},model:{value:t.dialogDelete,callback:function(e){t.dialogDelete=e},expression:"dialogDelete"}},[e(o.Z,[e(n.EB,{staticClass:"text-h5"},[t._v("¿Está seguro que desea eliminar este artículo?")]),e(n.h7,[e(u.Z),e(a.Z,{attrs:{color:"blue darken-1",text:""},on:{click:t.closeDelete}},[t._v("Cancelar")]),e(a.Z,{attrs:{color:"blue darken-1",text:""},on:{click:t.deleteItemConfirm}},[t._v("Aceptar")]),e(u.Z)],1)],1)],1)],1)]},proxy:!0},{key:"item.actions",fn:function({item:i}){return[e("div",{staticClass:"d-flex justify-around"},[e(d.Z,{staticClass:"mr-2",attrs:{small:""},on:{click:function(e){return t.detailsItem(i)}}},[t._v(" mdi-information ")]),e(d.Z,{staticClass:"mr-2",attrs:{small:""},on:{click:function(e){return t.editItem(i)}}},[t._v(" mdi-pencil ")]),e(d.Z,{attrs:{small:""},on:{click:function(e){return t.deleteItem(i)}}},[t._v(" mdi-delete ")])],1)]}}])})],1)},f=[],g=i(1696),I=i(7068),x=i(9321),b={data:()=>({datos:[],dialog:!1,dialogInfo:!1,dialogDelete:!1,isNew:!0,success:!1,headers:[{text:"INST/PROPIETARIO",value:"propietario"},{text:"CODIGO",value:"codigo"},{text:"NO.INVENTARIO",value:"noInventario"},{text:"REGISTRO DE ENTRADA",value:"registroEntrada"},{text:"NOMBRE COMUN",value:"comun"},{text:"MANIFESTACIÓN",value:"manifestacion"},{text:"ESTADO",value:"estado"},{text:"GRADO DE VALOR",align:"center",value:"gradoDeValor"},{text:"DETALLES",value:"actions",sortable:!1,align:"center"}],editedIndex:-1,editedItem:{propietario:"",codigo:"",noInventario:"",cantidad:1,manifestacion:"",categoria:"",comun:"",tecnico:"",locColecta:"",pais:"",fechaColecta:"",colector:"",fecha:"",lote:"",alto:"",ancho:"",profundidad:"",ubicacion:"",estado:"",valor:"",gradoDeValor:"",procedencia:"",acontecimiento:"",expediente:"",prestado:!1,recibido:!1},infoItem:{},defaultItem:{propietario:"",codigo:"",noInventario:"",cantidad:1,manifestacion:"",categoria:"",comun:"",tecnico:"",locColecta:"",pais:"",fechaColecta:"",colector:"",fecha:"",lote:"",alto:"",ancho:"",profundidad:"",ubicacion:"",estado:"",valor:"",gradoDeValor:"",procedencia:"",acontecimiento:"",expediente:"",donacion:!1,prestado:!1,recibido:!1}}),components:{NaturalDialog:I.Z,NaturalCreateEdit:x.Z},computed:{formTitle(){return-1===this.editedIndex?"Registrar Artículo":"Editar Artículo"}},watch:{dialog(t){t||this.close()},dialogDelete(t){t||this.closeDelete()}},mounted(){this.requestData()},methods:{requestData(){g.Z.getNaturales().then((t=>{this.datos=t,this.datos.forEach((t=>{t.registroEntrada=t.registroEntrada.slice(0,10)}))})).catch((t=>console.log))},reload(){this.close(),this.success=!0,this.requestData()},detailsItem(t){this.success=!1,this.editedIndex=this.datos.indexOf(t),this.infoItem=Object.assign({},t),this.dialogInfo=!0},editItem(t){this.success=!1,this.isNew=!1,this.editedIndex=this.datos.indexOf(t),this.editedItem=Object.assign({},t),this.dialog=!0},deleteItem(t){this.success=!1,this.editedIndex=this.datos.indexOf(t),this.editedItem=Object.assign({},t),this.dialogDelete=!0},deleteItemConfirm(){g.Z.deleteNatural(this.editedItem._id).then((t=>{console.log(t),this.closeDelete(),this.requestData()})).catch((t=>{console.log(t.response)}))},close(){this.dialog=!1,this.$nextTick((()=>{this.editedItem=Object.assign({},this.defaultItem),this.editedIndex=-1}))},closeInfo(){this.dialogInfo=!1,this.$nextTick((()=>{this.infoItem=Object.assign({},this.defaultItem),this.editedIndex=-1}))},closeDelete(){this.dialogDelete=!1,this.$nextTick((()=>{this.editedItem=Object.assign({},this.defaultItem),this.editedIndex=-1}))}}},Z=b,k=i(1001),A=(0,k.Z)(Z,v,f,!1,null,"3a84dd80",null),C=A.exports},1281:function(t,e,i){i.r(e),i.d(e,{default:function(){return B}});var s=i(7359),a=i(6190),o=i(4145),n=i(4886),r=i(5151),l=i(4061),c=i(9223),d=i(4324),h=i(7394),u=i(3687),m=i(6313),p=i(7953),v=function(){var t=this,e=t._self._c;return e("div",[e(h.xy,[t.success?e(s.Z,{staticClass:"alert",attrs:{prominent:"",shaped:"",type:"success","max-width":"300px",dismissible:""},on:{click:function(e){t.success=!1}}},[t._v("Transferencia realizada exitosamente.")]):t._e()],1),e(r.Z,{staticClass:"elevation-1 mt-2",attrs:{headers:t.headers,items:t.datos,"items-per-page":-1,"hide-default-footer":""},scopedSlots:t._u([{key:"top",fn:function(){return[e(m.Z,{attrs:{flat:""}},[e(p.qW,[t._v("Transferencias")]),e(c.Z,{staticClass:"mx-4",attrs:{inset:"",vertical:""}}),e(u.Z),e(l.Z,{attrs:{"max-width":"1000"},model:{value:t.dialogInfo,callback:function(e){t.dialogInfo=e},expression:"dialogInfo"}},[e(o.Z,{staticClass:"pa-4"},[e(n.ZB,["armas"===t.infoItem.section?e("arma-dialog",{attrs:{editedItem:t.articulo}}):"naturales"===t.infoItem.section?e("natural-dialog",{attrs:{editedItem:t.articulo}}):t._e()],1),e(n.h7,[e(u.Z),e(a.Z,{attrs:{color:"red darken-1",text:""},on:{click:t.closeInfo}},[t._v(" Cerrar ")])],1)],1)],1),e(l.Z,{attrs:{"max-width":"1000px"},scopedSlots:t._u([{key:"activator",fn:function({on:i,attrs:s}){return[e(a.Z,t._g(t._b({staticClass:"mb-2",attrs:{color:"primary",dark:""}},"v-btn",s,!1),i),[t._v(" Nueva Transferencia ")])]}}]),model:{value:t.dialog,callback:function(e){t.dialog=e},expression:"dialog"}},[e("transferencia-create",{attrs:{editedItem:t.editedItem},on:{close:t.close,reload:t.reload}})],1)],1)]},proxy:!0},{key:"item.actions",fn:function({item:i}){return[e(d.Z,{staticClass:"mr-2",attrs:{small:""},on:{click:function(e){return t.detailsItem(i)}}},[t._v(" mdi-information ")])]}}])})],1)},f=[],g=i(1696),I=i(3382),x=i(7068),b=i(266),Z=i(2118),k=i(6243),A=i(8687),C=i(1713),E=i(9481),T=i(7808),O=function(){var t=this,e=t._self._c;return e(o.Z,{attrs:{elevation:"0"}},[e(n.EB,[e("span",{staticClass:"text-h5"},[t._v("Registrar Transferencia")])]),e(n.ZB,[e(Z.Z,[e(h.Qn,[t.error?e(s.Z,{staticClass:"mb-6",attrs:{dense:"",text:"",outlined:"",type:"error"}},[t._v(" "+t._s(t.error)+" ")]):t._e()],1),e(C.Z,[e(b.Z,{attrs:{cols:"12",sm:"6"}},[e(T.Z,{attrs:{label:"MUNICIPIO",outlined:""},model:{value:t.editedItem.municipio,callback:function(e){t.$set(t.editedItem,"municipio",e)},expression:"editedItem.municipio"}}),e(T.Z,{attrs:{label:"MUSEO QUE TRANSFIERE",outlined:""},model:{value:t.editedItem.museoT,callback:function(e){t.$set(t.editedItem,"museoT",e)},expression:"editedItem.museoT"}}),e(T.Z,{attrs:{label:"ENTREGADO POR",outlined:""},model:{value:t.editedItem.responsableT,callback:function(e){t.$set(t.editedItem,"responsableT",e)},expression:"editedItem.responsableT"}}),e(T.Z,{attrs:{label:"CANTIDAD",outlined:"",type:"number"},model:{value:t.editedItem.cantidad,callback:function(e){t.$set(t.editedItem,"cantidad",e)},expression:"editedItem.cantidad"}})],1),e(b.Z,{attrs:{cols:"12",sm:"6"}},[e(T.Z,{attrs:{label:"RECIBIDO POR",outlined:""},model:{value:t.editedItem.responsableR,callback:function(e){t.$set(t.editedItem,"responsableR",e)},expression:"editedItem.responsableR"}}),e(T.Z,{attrs:{label:"MUSEO QUE RECIBE",outlined:""},model:{value:t.editedItem.museoR,callback:function(e){t.$set(t.editedItem,"museoR",e)},expression:"editedItem.museoR"}}),e("h3",[t._v("Elige la sección:")]),e(A.Z,{staticClass:"font-weight-bold",attrs:{row:""},model:{value:t.editedItem.section,callback:function(e){t.$set(t.editedItem,"section",e)},expression:"editedItem.section"}},[e(k.Z,{attrs:{label:"Armas",value:"armas",color:"armas"===t.editedItem.section?"success":""},on:{click:t.changeSection}}),e(k.Z,{attrs:{label:"Ciencias Naturales",value:"naturales",color:"armas"===t.editedItem.section?"":"success"},on:{click:t.changeSection}})],1),e(E.Z,{attrs:{items:t.inventario,label:"No. de Inventario",outlined:""},model:{value:t.inventarioSelected,callback:function(e){t.inventarioSelected=e},expression:"inventarioSelected"}})],1)],1)],1)],1),e(n.h7,[e(u.Z),e(a.Z,{attrs:{color:"blue darken-1",text:""},on:{click:function(e){return t.$emit("close")}}},[t._v(" Cancelar ")]),e(a.Z,{attrs:{color:"blue darken-1",text:""},on:{click:t.save}},[t._v(" Salvar ")])],1)],1)},_=[],w={data(){return{error:"",inventarioSelected:"",armas:[],naturales:[],inventario:[]}},props:{editedItem:Object},mounted(){this.requestArticulos(),console.log("inventario",this.inventario)},methods:{requestArticulos(){g.Z.getArmas().then((t=>{this.armas=t,this.inventario=this.armas.map((t=>t.noInventario))})),g.Z.getNaturales().then((t=>{this.naturales=t,console.log("naturales",this.naturales)}))},showErrors(t){console.log(t),400===t.response.status?this.error=t.response.data.errors[0].msg:401===t.response.status?this.error=t.response.data.error.msg:this.error="No se pudo establecer la conexión con el servidor."},save(){if(""===this.editedItem.responsableT)return void(this.error="El nombre de la persona responsable de la transferencia es obligatorio.");if(""===this.editedItem.responsableR)return void(this.error="El nombre de la persona que recibe la transferencia es obligatorio.");if(this.editedItem.cantidad<1)return void(this.error="La cantidad es obligatoria.");if(""===this.inventarioSelected)return void(this.error="El No. de Inventario es obligatorio.");let t={};t="armas"===this.editedItem.section?this.armas.find((t=>t.noInventario===this.inventarioSelected)):this.naturales.find((t=>t.noInventario===this.inventarioSelected)),this.editedItem.elementId=t._id,g.Z.createTransferencia(this.editedItem).then((()=>{this.$emit("reload")})).catch(this.showErrors)},changeSection(){"armas"===this.editedItem.section?this.inventario=this.armas.map((t=>t.noInventario)):this.inventario=this.naturales.map((t=>t.noInventario))}}},D=w,R=i(1001),y=(0,R.Z)(D,O,_,!1,null,null,null),N=y.exports,S={data:()=>({datos:[],articulo:{},dialog:!1,dialogInfo:!1,success:!1,headers:[{text:"MUNICIPIO",value:"municipio"},{text:"MUSEO QUE TRANSFIERE",value:"museoT"},{text:"CANTIDAD",value:"cantidad"},{text:"FECHA ENTREGA",value:"fechaT"},{text:"ENTREGADO POR",value:"responsableT"},{text:"RECIBIDO POR",value:"responsableR"},{text:"MUSEO QUE RECIBE",value:"museoR"},{text:"ARTICULO TRANSFERIDO",value:"actions",sortable:!1,align:"center"}],editedIndex:-1,editedItem:{municipio:"",museoT:"",responsableT:"",cantidad:1,responsableR:"",museoR:"",section:"armas",elementId:""},infoItem:{},defaultItem:{municipio:"",museoT:"",responsableT:"",cantidad:1,responsableR:"",museoR:"",section:"armas",elementId:""}}),components:{ArmaDialog:I.Z,NaturalDialog:x.Z,TransferenciaCreate:N},watch:{dialog(t){t||this.close()}},mounted(){this.requestTransferencias()},methods:{requestTransferencias(){g.Z.getTransferencias().then((t=>{this.datos=t,this.datos.forEach((t=>{t.fechaT=t.fechaT.slice(0,10)}))}))},requestArticulo(t){g.Z.getOneTransferencia(t).then((t=>{this.articulo=t.articulo,this.articulo.registroEntrada=this.articulo.registroEntrada.slice(0,10)}))},reload(){this.close(),this.success=!0,this.requestTransferencias()},detailsItem(t){this.editedIndex=this.datos.indexOf(t),this.infoItem=Object.assign({},t),this.requestArticulo(t._id),this.dialogInfo=!0},editItem(t){this.success=!1,this.editedIndex=this.datos.indexOf(t),this.editedItem=Object.assign({},t),this.dialog=!0},close(){this.dialog=!1,this.$nextTick((()=>{this.editedItem=Object.assign({},this.defaultItem),this.editedIndex=-1}))},closeInfo(){this.dialogInfo=!1,this.$nextTick((()=>{this.infoItem=Object.assign({},this.defaultItem),this.editedIndex=-1}))}}},$=S,M=(0,R.Z)($,v,f,!1,null,"7c338303",null),B=M.exports},4578:function(t,e,i){i.r(e),i.d(e,{default:function(){return V}});var s=i(4145),a=i(4324),o=i(5808),n=i(7397),r=i(4525),l=i(1137),c=i(7912),d=i(4611),h=(i(7658),i(541),i(5495)),u=i(3347),m=i(6878),p=i(908),v=i(7388),f=i(9351),g=i(9131),I=i(6669),x=i(5942),b=i(6746),Z=i(4802),k=i(5352),A=i(7678);const C=(0,A.Z)((0,u.Z)("left",["isActive","isMobile","miniVariant","expandOnHover","permanent","right","temporary","width"]),m.Z,p.Z,v.Z,f.Z,g.Z,I.Z);var E=C.extend({name:"v-navigation-drawer",directives:{ClickOutside:x.Z,Resize:b.Z,Touch:Z.Z},provide(){return{isInNav:"nav"===this.tag}},props:{bottom:Boolean,clipped:Boolean,disableResizeWatcher:Boolean,disableRouteWatcher:Boolean,expandOnHover:Boolean,floating:Boolean,height:{type:[Number,String],default(){return this.app?"100vh":"100%"}},miniVariant:Boolean,miniVariantWidth:{type:[Number,String],default:56},permanent:Boolean,right:Boolean,src:{type:[String,Object],default:""},stateless:Boolean,tag:{type:String,default(){return this.app?"nav":"aside"}},temporary:Boolean,touchless:Boolean,width:{type:[Number,String],default:256},value:null},data:()=>({isMouseover:!1,touchArea:{left:0,right:0},stackMinZIndex:6}),computed:{applicationProperty(){return this.right?"right":"left"},classes(){return{"v-navigation-drawer":!0,"v-navigation-drawer--absolute":this.absolute,"v-navigation-drawer--bottom":this.bottom,"v-navigation-drawer--clipped":this.clipped,"v-navigation-drawer--close":!this.isActive,"v-navigation-drawer--fixed":!this.absolute&&(this.app||this.fixed),"v-navigation-drawer--floating":this.floating,"v-navigation-drawer--is-mobile":this.isMobile,"v-navigation-drawer--is-mouseover":this.isMouseover,"v-navigation-drawer--mini-variant":this.isMiniVariant,"v-navigation-drawer--custom-mini-variant":56!==Number(this.miniVariantWidth),"v-navigation-drawer--open":this.isActive,"v-navigation-drawer--open-on-hover":this.expandOnHover,"v-navigation-drawer--right":this.right,"v-navigation-drawer--temporary":this.temporary,...this.themeClasses}},computedMaxHeight(){if(!this.hasApp)return null;const t=this.$vuetify.application.bottom+this.$vuetify.application.footer+this.$vuetify.application.bar;return this.clipped?t+this.$vuetify.application.top:t},computedTop(){if(!this.hasApp)return 0;let t=this.$vuetify.application.bar;return t+=this.clipped?this.$vuetify.application.top:0,t},computedTransform(){return this.isActive?0:this.isBottom||this.right?100:-100},computedWidth(){return this.isMiniVariant?this.miniVariantWidth:this.width},hasApp(){return this.app&&!this.isMobile&&!this.temporary},isBottom(){return this.bottom&&this.isMobile},isMiniVariant(){return!this.expandOnHover&&this.miniVariant||this.expandOnHover&&!this.isMouseover},isMobile(){return!this.stateless&&!this.permanent&&v.Z.options.computed.isMobile.call(this)},reactsToClick(){return!this.stateless&&!this.permanent&&(this.isMobile||this.temporary)},reactsToMobile(){return this.app&&!this.disableResizeWatcher&&!this.permanent&&!this.stateless&&!this.temporary},reactsToResize(){return!this.disableResizeWatcher&&!this.stateless},reactsToRoute(){return!this.disableRouteWatcher&&!this.stateless&&(this.temporary||this.isMobile)},showOverlay(){return!this.hideOverlay&&this.isActive&&(this.isMobile||this.temporary)},styles(){const t=this.isBottom?"translateY":"translateX";return{height:(0,k.kb)(this.height),top:this.isBottom?"auto":(0,k.kb)(this.computedTop),maxHeight:null!=this.computedMaxHeight?`calc(100% - ${(0,k.kb)(this.computedMaxHeight)})`:void 0,transform:`${t}(${(0,k.kb)(this.computedTransform,"%")})`,width:(0,k.kb)(this.computedWidth)}}},watch:{$route:"onRouteChange",isActive(t){this.$emit("input",t)},isMobile(t,e){!t&&this.isActive&&!this.temporary&&this.removeOverlay(),null!=e&&this.reactsToResize&&this.reactsToMobile&&(this.isActive=!t)},permanent(t){t&&(this.isActive=!0)},showOverlay(t){t?this.genOverlay():this.removeOverlay()},value(t){this.permanent||(null!=t?t!==this.isActive&&(this.isActive=t):this.init())},expandOnHover:"updateMiniVariant",isMouseover(t){this.updateMiniVariant(!t)}},beforeMount(){this.init()},methods:{calculateTouchArea(){const t=this.$el.parentNode;if(!t)return;const e=t.getBoundingClientRect();this.touchArea={left:e.left+50,right:e.right-50}},closeConditional(){return this.isActive&&!this._isDestroyed&&this.reactsToClick},genAppend(){return this.genPosition("append")},genBackground(){const t={height:"100%",width:"100%",src:this.src},e=this.$scopedSlots.img?this.$scopedSlots.img(t):this.$createElement(h.Z,{props:t});return this.$createElement("div",{staticClass:"v-navigation-drawer__image"},[e])},genDirectives(){const t=[{name:"click-outside",value:{handler:()=>{this.isActive=!1},closeConditional:this.closeConditional,include:this.getOpenDependentElements}}];return this.touchless||this.stateless||t.push({name:"touch",value:{parent:!0,left:this.swipeLeft,right:this.swipeRight}}),t},genListeners(){const t={mouseenter:()=>this.isMouseover=!0,mouseleave:()=>this.isMouseover=!1,transitionend:t=>{if(t.target!==t.currentTarget)return;this.$emit("transitionend",t);const e=document.createEvent("UIEvents");e.initUIEvent("resize",!0,!1,window,0),window.dispatchEvent(e)}};return this.miniVariant&&(t.click=()=>this.$emit("update:mini-variant",!1)),t},genPosition(t){const e=(0,k.z9)(this,t);return e?this.$createElement("div",{staticClass:`v-navigation-drawer__${t}`},e):e},genPrepend(){return this.genPosition("prepend")},genContent(){return this.$createElement("div",{staticClass:"v-navigation-drawer__content"},this.$slots.default)},genBorder(){return this.$createElement("div",{staticClass:"v-navigation-drawer__border"})},init(){this.permanent?this.isActive=!0:this.stateless||null!=this.value?this.isActive=this.value:this.temporary||(this.isActive=!this.isMobile)},onRouteChange(){this.reactsToRoute&&this.closeConditional()&&(this.isActive=!1)},swipeLeft(t){this.isActive&&this.right||(this.calculateTouchArea(),Math.abs(t.touchendX-t.touchstartX)<100||(this.right&&t.touchstartX>=this.touchArea.right?this.isActive=!0:!this.right&&this.isActive&&(this.isActive=!1)))},swipeRight(t){this.isActive&&!this.right||(this.calculateTouchArea(),Math.abs(t.touchendX-t.touchstartX)<100||(!this.right&&t.touchstartX<=this.touchArea.left?this.isActive=!0:this.right&&this.isActive&&(this.isActive=!1)))},updateApplication(){if(!this.isActive||this.isMobile||this.temporary||!this.$el)return 0;const t=Number(this.miniVariant?this.miniVariantWidth:this.width);return isNaN(t)?this.$el.clientWidth:t},updateMiniVariant(t){this.expandOnHover&&this.miniVariant!==t&&this.$emit("update:mini-variant",t)}},render(t){const e=[this.genPrepend(),this.genContent(),this.genAppend(),this.genBorder()];return(this.src||(0,k.z9)(this,"img"))&&e.unshift(this.genBackground()),t(this.tag,this.setBackgroundColor(this.color,{class:this.classes,style:this.styles,directives:this.genDirectives(),on:this.genListeners()}),e)}}),T=function(){var t=this,e=t._self._c;return e("div",[e(s.Z,[e(E,{staticClass:"back pt-16",attrs:{bottom:"","mobile-breakpoint":"768",fixed:"","expand-on-hover":""}},[e(o.Z,{attrs:{nav:"",dense:""}},[e(c.Z,{attrs:{color:"primary"},model:{value:t.selectedItem,callback:function(e){t.selectedItem=e},expression:"selectedItem"}},t._l(t.items,(function(i,s){return e("router-link",{key:s,staticClass:"link",attrs:{to:i.route}},[e(r.Z,{on:{click:function(e){return t.selectNav()}}},[e(d.Z,[e(a.Z,{domProps:{textContent:t._s(i.icon)}})],1),e(l.km,[e(l.V9,{domProps:{textContent:t._s(i.text)}})],1)],1)],1)})),1),e(n.Z,{attrs:{value:!0,"prepend-icon":"mdi-file-document","no-action":""},scopedSlots:t._u([{key:"activator",fn:function(){return[e(l.V9,[t._v("Secciones")])]},proxy:!0}])},[e(c.Z,{staticClass:"pl-6",attrs:{color:"primary"},model:{value:t.selectedSection,callback:function(e){t.selectedSection=e},expression:"selectedSection"}},t._l(t.sections,(function(i,s){return e("router-link",{key:s,staticClass:"link",attrs:{to:i.route}},[e(r.Z,{on:{click:function(e){return t.selectSection()}}},[e(d.Z,[e(a.Z,{domProps:{textContent:t._s(i.icon)}})],1),e(l.km,[e(l.V9,{domProps:{textContent:t._s(i.text)}})],1)],1)],1)})),1)],1)],1)],1)],1),e("div",{staticClass:"ml-14"},[e("router-view")],1)],1)},O=[],_=i(6781),w=i(9230),D=i(1281),R=i(9315),y=i(9874),N=i(3792),S={components:{HomeView:_["default"],PrestamosAdmin:w["default"],ArmasAdmin:y["default"],NaturalesAdmin:N["default"],TransferenciasAdmin:D["default"],DonacionAdmin:R["default"]},data:()=>({selectedItem:-1,selectedSection:-1,items:[{text:"Estadistica",icon:"mdi-chart-line",route:"/admin/estadistica"},{text:"Prestamos",icon:"mdi-hand-coin",route:"/admin/prestamos"},{text:"Transferencias",icon:"mdi-bank-transfer",route:"/admin/transferencias"},{text:"Donaciones",icon:"mdi-gift",route:"/admin/donaciones"},{text:"Bajas",icon:"mdi-trash-can",route:"/admin/bajas"}],sections:[{text:"Armas",icon:"mdi-sword-cross",route:"/admin/armas"},{text:"Ciencias Naturales",icon:"mdi-sprout",route:"/admin/naturales"}]}),mounted(){this.$route.path.includes("estadistica")?this.selectedItem=0:this.$route.path.includes("prestamos")?this.selectedItem=1:this.$route.path.includes("transferencias")?this.selectedItem=2:this.$route.path.includes("donaciones")?this.selectedItem=3:this.$route.path.includes("bajas")?this.selectedItem=4:this.$route.path.includes("armas")?this.selectedSection=0:this.$route.path.includes("naturales")&&(this.selectedSection=1)},methods:{selectNav(){this.selectedSection=-1},selectSection(){this.selectedItem=-1}}},$=S,M=i(1001),B=(0,M.Z)($,T,O,!1,null,"8e8cadaa",null),V=B.exports}}]);
//# sourceMappingURL=admin.b8e22bf5.js.map