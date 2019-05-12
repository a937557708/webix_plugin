/**
 * @license
 * Webix QueryBuilder v.6.3.2
 * This software is covered by Webix Trial License.
 * Usage without proper license is prohibited.
 * (c) XB Software Ltd.
 */

!function(e,t){"object"==typeof exports&&"undefined"!=typeof module?t():"function"==typeof define&&define.amd?define(t):t()}(0,function(){"use strict";var e={or:"Or",and:"And",delete_rule:"Delete rule",add_rule:"Add rule",add_group:"Add group",less:"less",less_or_equal:"less or equal",greater:"greater",greater_or_equal:"greater or equal",between:"between",not_between:"not between",begins_with:"begins with",not_begins_with:"not begins with",contains:"contains",not_contains:"not contains",ends_with:"ends with",not_ends_with:"not ends with",is_empty:"is empty",is_not_empty:"is not empty",equal:"equal",not_equal:"not equal",is_null:"is null",is_not_null:"is not null",default_option:"---",cancel:"Cancel",filter:"Filter",sort:"Sort",sortby:"Sort by",asc:"asc",desc:"desc"};function t(e,t){var n=webix.i18n.locales[t];n&&(n.querybuilder=e)}function o(e){return function i(e){if(Array.isArray(e)){for(var t=0,n=new Array(e.length);t<e.length;t++)n[t]=e[t];return n}}(e)||function t(e){if(Symbol.iterator in Object(e)||"[object Arguments]"===Object.prototype.toString.call(e))return Array.from(e)}(e)||function n(){throw new TypeError("Invalid attempt to spread non-iterable instance")}()}t({or:"або",and:"і",delete_rule:"Выдаліць правіла",add_rule:"Дадаць правіла",add_group:"Дадаць групу",less:"менш",less_or_equal:"менш або роўна",greater:"больш",greater_or_equal:"больш або роўна",between:"паміж",not_between:"не паміж",begins_with:"пачынаецца з",not_begins_with:"не пачынаецца з",contains:"змяшчае",not_contains:"не змяшчае",ends_with:"заканчваецца",not_ends_with:"не сканчаецца",is_empty:"пуста",is_not_empty:"не пуста",equal:"роўныя",not_equal:"не роўныя",is_null:"роўная нуля",is_not_null:"не роўная нуля",default_option:"---",cancel:"адмяніць",filter:"фільтраваць",sort:"сартаваць"},"be-BY"),t({or:"oder",and:"und",delete_rule:"Regel löschen",add_rule:"Regel hinzufügen",add_group:"Gruppe hinzufügen",less:"weniger",less_or_equal:"weniger oder gleich",greater:"mehr",greater_or_equal:"größer oder gleich",between:"zwischen",not_between:"nicht zwischen",begins_with:"beginnt mit",not_begins_with:"nicht beginnt mit",contains:"enthält",not_contains:"nicht enthält",ends_with:"endet mit",not_ends_with:"nicht endet mit",is_empty:"ist leer",is_not_empty:"es ist nicht leer",equal:"gleich",not_equal:"ungleich",is_null:"ist null",is_not_null:"es ist nicht null",default_option:"---",cancel:"Stornieren",filter:"Filter",sort:"Sortieren"},"de-DE"),t(e,"en-US"),t({or:"o",and:"y",delete_rule:"Borrar regla",add_rule:"Añadir regla",add_group:"Añadir grupo",less:"menos",less_or_equal:"menor o igual",greater:"mayor",greater_or_equal:"mayor o igual",between:"entre",not_between:"no entre",begins_with:"comienza con",not_begins_with:"no comienza con",contains:"contiene",not_contains:"not contiene",ends_with:"termina con",not_ends_with:"no termina con",is_empty:"está vacía",is_not_empty:"no está vacía",equal:"igual",not_equal:"no es igual",is_null:"es nulo",is_not_null:"no es nulo",default_option:"---",cancel:"Cancelar",filter:"Filtrar",sort:"Ordenar"},"es-ES"),t({or:"ou",and:"et",delete_rule:"Supprimer la règle",add_rule:"Ajouter une règle",add_group:"Ajouter un groupe",less:"moins",less_or_equal:"inférieur ou égal",greater:"plus grand",greater_or_equal:"supérieur ou égal",between:"entre",not_between:"pas entre",begins_with:"commence par",not_begins_with:"ne commence par",contains:"contient",not_contains:"ne contient",ends_with:"se termine par",not_ends_with:"pas se termine par",is_empty:"est vide",is_not_empty:"Il n'est pas vide",equal:"égal",not_equal:"pas égal",is_null:"est nulle",is_not_null:"Il est non nul",default_option:"---",cancel:"Annuler",filter:"Filtre",sort:"Trier"},"fr-FR"),t({or:"o",and:"e",delete_rule:"Elimina la regola",add_rule:"Aggiungi regola",add_group:"Aggiungere gruppo",less:"meno",less_or_equal:"minore o uguale",greater:"maggiore",greater_or_equal:"maggiore o uguale",between:"tra",not_between:"non tra",begins_with:"inizia con",not_begins_with:"non inizia con",contains:"contiene",not_contains:"non contiene",ends_with:"finisce con",
not_ends_with:"non termina con",is_empty:"è vuoto",is_not_empty:"non è vuota",equal:"uguale",not_equal:"non uguale",is_null:"è nullo",is_not_null:"non è nullo",default_option:"---",cancel:"Annulla",filter:"Filtro",sort:"Ordinare"},"it-IT"),t({or:"または",and:"そして",delete_rule:"ルールを削除する",add_rule:"ルールを追加",add_group:"グループを追加",less:"レス",less_or_equal:"以下",greater:"大きいです",greater_or_equal:"以上",between:"間に",not_between:"いない間",begins_with:"で始まります",not_begins_with:"ないで始まります",contains:"含まれています",not_contains:"含まれていません",ends_with:"で終わります",not_ends_with:"で終わりではありません",is_empty:"空であります",is_not_empty:"それは空でありません",equal:"等しいです",not_equal:"等しくありません",is_null:"ブランクである",is_not_null:"ブランクではない",default_option:"---",cancel:"キャンセル",filter:"フィルタ",sort:"ソート"},"ja-JP"),t({or:"ou",and:"e",delete_rule:"Excluir regra",add_rule:"Adicionar regra",add_group:"Adicionar grupo",less:"menos",less_or_equal:"menor ou igual",greater:"maior",greater_or_equal:"maior ou igual",between:"entre",not_between:"não entre",begins_with:"começa com",not_begins_with:"não começa com",contains:"contém",not_contains:"não contém",ends_with:"termina com",not_ends_with:"não termina com",is_empty:"está vazia",is_not_empty:"não é vazia",equal:"igual",not_equal:"não é igual",is_null:"é nulo",is_not_null:"não é nula",default_option:"---",cancel:"Cancelar",filter:"Filtro",sort:"Ordenar"},"pt-BR"),t({or:"или",and:"и",delete_rule:"Удалить правило",add_rule:"Добавить правило",add_group:"Добавить группу",less:"меньше",less_or_equal:"меньше или равно",greater:"больше",greater_or_equal:"больше или равно",between:"между",not_between:"не между",begins_with:"начинается с",not_begins_with:"не начинается с",contains:"содержит",not_contains:"не содержит",ends_with:"заканчиватся",not_ends_with:"не заканчиватся",is_empty:"пусто",is_not_empty:"не пусто",equal:"равно",not_equal:"не равно",is_null:"равно нулю",is_not_null:"не равно нулю",default_option:"---",cancel:"Отменить",filter:"Фильтровать",sort:"Сортировать"},"ru-RU"),t({or:"要么",and:"和",delete_rule:"删除规则",add_rule:"添加规则",add_group:"添加组",less:"减",less_or_equal:"少于或等于",greater:"更大",greater_or_equal:"大于或等于",between:"之间",not_between:"不在之间",begins_with:"开始于",not_begins_with:"不开始",contains:"包含",not_contains:"不包含",ends_with:"结束",not_ends_with:"不是以",is_empty:"是空的",is_not_empty:"不是空的",equal:"等于",not_equal:"不平等",is_null:"为空",is_not_null:"不为空",default_option:"---",cancel:"取消",filter:"过滤",sort:"分类"},"zh-CN"),webix.i18n.querybuilder=e,webix.protoUI({name:"querybuilderline",defaults:{padding:0,margin:10,borderless:!0},$init:function(e){var t=this,n=webix.i18n.querybuilder;this.config.value={},this.$view.className+=" webix_qb_line";var i=o(e.fields),r=[this._selectConfig(e,"webix_qb_value_select","key",i),this._selectConfig(e,"webix_qb_rule_select","rule",{body:{data:[],template:"#name#"}},!0),{view:"button",type:"htmlbutton",css:"webix_qb_close",width:26,inputWidth:26,name:"close",label:'<span class="webix_icon wxi-trash" title="'.concat(n.delete_rule,'"></span>'),click:function(){t._getParentQuery()._deleteRow(t)}}];e.columnMode?(e.css=(e.css||"")+" webix_column_qb",e.margin=e.margin||0,e.rows=r):(r.push({gravity:.001}),e.cols=r)},_selectConfig:function(e,t,n,i,r){var o=this;return{view:"richselect",minWidth:100,maxWidth:e.inputMaxWidth,inputPadding:0,options:i,hidden:r,css:t,name:n,on:{onChange:function(){return o._onChange(n)}}}},_inputConfig:function(e,t,n,i){var r,o=this;return(r="string"==typeof t?{view:t}:webix.copy(t)).name="value",r.maxWidth=e.inputMaxWidth,r.value=n,r.on={onChange:function(){return o._onChange("value")}},r.hidden=i,"rangeslider"===t&&(r.min=0,r.max=100,r.value=[0,100],r.moveTitle=!1,r.title=function(e){var t=e.value;return t[0]===t[1]?t[0]:t[0]+" - "+t[1]}),r},getValue:function(){var e=this.config.value;return!e.rule||""===e.value&&"equal"!==e.rule&&"not_equal"!==e.rule&&this.elements.value?null:this.config.value},setValue:function(e){this.config.value=e,this._silent=!0,e&&e.key&&(this.elements.key.setValue(e.key),e.rule&&(this.elements.rule.setValue(e.rule),e.value&&this.elements.value.setValue(e.value))),this._silent=!1},
_onChange:function(e){var t=this.elements[e],n=this.config.value;n[e]=t.getValue(),this._adjustVisible(e,n),this._silent||(this._getTopQuery().callEvent("onChange",[this]),this._getTopQuery().callEvent("onKeySelect",[this]))},_adjustVisible:function(e,t){var n=this.elements.key.getList().getItem(t.key),i=this.elements.rule,r=this.elements.value;"key"===e?this._updateRuleField(t,n,i,r):"rule"===e&&this._updateValueField(t,n,i,r)},_fillRules:function(t,e){var n=this.config.filters;n.filter(function(e){return e.type[t.type]||e.type.any}),e.getList().data.importData(n.data)},_updateRuleField:function(e,t,n,i){var r=n.getValue(),o=r?n.getList().getItem(r).type:"";this._silent||o[t.type]||(e.rule=e.value=""),e.key?(n.show(),this._fillRules(t,n),n.setValue(e.rule),this._updateValueField(e,t,n,this.elements.value)):(n.hide(),i&&i.hide())},_updateValueField:function(e,t,n,i){if(e.rule){var r=n.getList().getItem(e.rule),o=r.type[t.type]||r.type.any;i&&o===i.name?(i.show(),i.setValue(e.value)):(this._silent||(e.value=""),i&&this.removeView(i),"none"!==o&&this.addView(this._inputConfig(this.config,o,e.value),2))}else this._silent||(e.value=""),i&&i.hide()},_getParentQuery:function(){return this.queryView({view:"querybuilder"},"parent")},_getTopQuery:function(){return this._getParentQuery()._getTopQuery()},getFilterHelper:function(){var t=this.config.value;if(!this.getValue())return null;var n=this.elements.rule.getList().getItem(t.rule);return function(e){return n.fn(e[t.key],t.value)}}},webix.ui.form,webix.EventSystem);var n={_init_sorting:function(){var e=this;if(this.config.sorting){var t=webix.i18n.querybuilder;this.$view.innerHTML="<div class='webix_qb_sorting'></div>",this._sortby=webix.ui({view:"multiselect",label:t.sortby,container:this.$view.childNodes[0],suggest:{body:{data:this.config.fields}},align:"right",width:300,labelWidth:57,on:{onChange:function(){e._callChangeMethod()}}}),this._sortorder=webix.ui(this._sortSelect={view:"richselect",container:this.$view.childNodes[0],options:[{id:"asc",value:t.asc},{id:"desc",value:t.desc}],value:"asc",width:80,on:{onChange:function(){e._getSortingValues().sortBy&&e._callChangeMethod()}}}),this.attachEvent("onDestruct",function(){this._sortby.destructor(),this._sortorder.destructor()})}},_getSortingValues:function(){return{sortBy:this._sortby.getValue(),sortAs:this._sortorder.getValue()}},_setSortingValues:function(e){if(e.fields){var t=this._sortby.getList();t.clearAll(),t.parse(e.fields)}this._sortby.setValue(e.sortBy),this._sortorder.setValue(e.sortAs)},getSortingElements:function(){return[this._sortby,this._sortorder]},getSortingHelper:function(){var n=this,l=this._getSortingValues();if(!l.sortBy)return null;var a=l.sortBy.split(",").map(function(t){var e=n._sortby.getList().getItem(t).type;return"number"===e&&(e="int"),{by:function(e){return e[t]},as:webix.DataStore.prototype.sorting.as[e]}});return function(e,t){for(var n,i=0;i<a.length;i++){var r=a[i],o=r.by(e),s=r.by(t);if(0!==(n=r.as(o,s)))break}return n*("asc"===l.sortAs?1:-1)}}},i={any:"text",number:"text",date:"datepicker"},r={number:"rangeslider",date:"daterangepicker"},s={string:"text"};var l={$init:function(){this.config.sqlDateFormat=this.config.sqlDateFormat||webix.Date.dateToStr("%Y-%m-%d %H:%i:%s",!1)},sqlOperators:{equal:{op:"= ?"},not_equal:{op:"!= ?"},less:{op:"< ?"},less_or_equal:{op:"<= ?"},greater:{op:"> ?"},greater_or_equal:{op:">= ?"},between:{op:"BETWEEN ?",sep:" AND "},not_between:{op:"NOT BETWEEN ?",sep:" AND "},begins_with:{op:"LIKE(?)",mod:"{0}%"},not_begins_with:{op:"NOT LIKE(?)",mod:"{0}%"},contains:{op:"LIKE(?)",mod:"%{0}%"},not_contains:{op:"NOT LIKE(?)",mod:"%{0}%"},ends_with:{op:"LIKE(?)",mod:"%{0}"},not_ends_with:{op:"NOT LIKE(?)",mod:"%{0}"},is_empty:{op:'= ""',no_val:!0},is_not_empty:{op:'!= ""',no_val:!0},is_null:{op:"IS NULL",no_val:!0},is_not_null:{op:"IS NOT NULL",no_val:!0}},toSQL:function(e){e=e||this.getValue();var t=[],n=this._getSqlString(e,t,!1);return{code:n,sql:this._placeValues(n,t),values:t}},_placeValues:function(e,t){var n=0;return e.replace(/\?/g,function(){var e=t[n++]
;return"string"==typeof e?'"'.concat(e,'"'):e})},_getSqlString:function(e,t,n){var i=this;if(!e)return"";if(e.rules&&e.rules.length){var r=e.rules.map(function(e){return i._getSqlString(e,t,!0)}).join(" "+e.glue.toUpperCase()+" ");return n&&(r="( ".concat(r," )")),r}return this._convertValueToSql(e,t)},_convertValueToSql:function(e,t){var n=this.config.sqlDateFormat,i=e.value;if(this.sqlOperators[e.rule]){var r=this.sqlOperators[e.rule];r.no_val||(r.mod?t.push(r.mod.replace("{0}","".concat(i))):Array.isArray(i)?(t.push(i[0]),t.push(i[1])):i.start||i.end?(t.push(n(i.start)),t.push(n(i.end))):i instanceof Date?t.push(n(i)):t.push(i));var o=r.op;return r.sep&&(o=o.replace("?","?".concat(r.sep,"?"))),"".concat(e.key," ").concat(o," ")}return""}},a={name:"querybuilder",defaults:{type:"space",borderless:!0,fields:[],sorting:!1,filtering:!0,glue:"and",columnMode:!1,maxLevel:999,inputMaxWidth:210},$init:function(e){e.filters=e.filters||function t(){var e=webix.i18n.querybuilder,n=function(e){return"number"==typeof e?e.toString():e};return[{id:"less",name:e.less,fn:function(e,t){return e<t},type:i},{id:"less_or_equal",name:e.less_or_equal,fn:function(e,t){return e<=t},type:i},{id:"greater",name:e.greater,fn:function(e,t){return t<e},type:i},{id:"greater_or_equal",name:e.greater_or_equal,fn:function(e,t){return t<=e},type:i},{id:"between",name:e.between,fn:function(e,t,n){return(!t||t<e)&&(!n||e<n)},type:r},{id:"not_between",name:e.not_between,fn:function(e,t,n){return!t||e<=t||!n||n<=e},type:r},{id:"begins_with",name:e.begins_with,fn:function(e,t){return 0===e.lastIndexOf(t,0)},type:s},{id:"not_begins_with",name:e.not_begins_with,fn:function(e,t){return 0!==e.lastIndexOf(t,0)},type:s},{id:"contains",name:e.contains,fn:function(e,t){return-1!==e.indexOf(t)},type:s},{id:"not_contains",name:e.not_contains,fn:function(e,t){return-1===e.indexOf(t)},type:s},{id:"ends_with",name:e.ends_with,fn:function(e,t){return-1!==e.indexOf(t,e.length-t.length)},type:s},{id:"not_ends_with",name:e.not_ends_with,fn:function(e,t){return-1===e.indexOf(t,e.length-t.length)},type:s},{id:"is_empty",name:e.is_empty,fn:function(e){return 0===e.length},type:{string:"none"}},{id:"is_not_empty",name:e.is_not_empty,fn:function(e){return 0<e.length},type:{string:"none"}},{id:"equal",name:e.equal,fn:function(e,t){return n(e)==n(t)},type:{any:"text",date:"datepicker"}},{id:"not_equal",name:e.not_equal,fn:function(e,t){return n(e)!=n(t)},type:{any:"text",date:"datepicker"}},{id:"is_null",name:e.is_null,fn:function(e){return null===e},type:{any:"none"}},{id:"is_not_null",name:e.is_not_null,fn:function(e){return null!==e},type:{any:"none"}}]}(),e.filters&&!e.filters.add&&(e.filters=new webix.DataCollection({data:e.filters})),this.$view.className+=" webix_qb_wrap",this.$ready.unshift(this._setLayout)},_setLayout:function(){var t=this,e=1<this.config.maxLevel,n=webix.i18n.querybuilder,i=[{$id:"buttons",borderless:!0,template:function(){var e="and"===t.config.glue;return'\n<div class="webix_qb_buttons">\n<button class="webix_qb_and'.concat(e?" webix_active":"",'">').concat(n.and,'</button>\n<button class="webix_qb_or ').concat(e?"":" webix_active",'">').concat(n.or,"</button>\n</div>")},onClick:{webix_qb_and:function(){return t._updateGlue("and")},webix_qb_or:function(){return t._updateGlue("or")}},minHeight:35,width:87},{$id:"rows",rows:[{borderless:!0,template:'\n<div class="webix_qb_add">\n'.concat(e?'<button class="webix_qb_add_group">+ '.concat(n.add_group,"</button>"):"",'\n<button class="webix_qb_add_rule">+ ').concat(n.add_rule,"</button>\n</div>"),onClick:{webix_qb_add_rule:function(){return t._addRule()},webix_qb_add_group:function(){return t._addGroup(!0)}},height:22,minWidth:220}],margin:5}];this._init_sorting(),!1===this.config.filtering?(this.config.padding=0,this.cols_setter([{height:1}])):this.cols_setter(i)},_updateGlue:function(e){this.config.glue=e,this.queryView({$id:"buttons"}).refresh(),this._callChangeMethod()},_addRow:function(e){var t=this.queryView({$id:"rows"}),n=t.getChildViews();return webix.$$(t.addView(e,n.length-1))},_deleteRow:function(e
){var t=this.queryView({$id:"rows"});if(t.removeView(e),this._callChangeMethod(),t.getChildViews().length<=1){var n=this._getParentQuery();n&&n._deleteRow(this.config.id)}},_addRule:function(){return this._addRow({view:"querybuilderline",inputMaxWidth:this.config.inputMaxWidth,fields:this.config.fields,filters:this.config.filters,columnMode:this.config.columnMode})},_addGroup:function(e){var t=this._addRow({view:"querybuilder",inputMaxWidth:this.config.inputMaxWidth,fields:this.config.fields,filters:this.config.filters,columnMode:this.config.columnMode,maxLevel:this.config.maxLevel-1});return e&&t._addRule(),t},_getParentQuery:function(){return this.queryView({view:this.config.view},"parent")},_getTopQuery:function(){for(var e,t=this;e=t._getParentQuery();)t=e;return t},_callChangeMethod:function(){this._getTopQuery().callEvent("onChange",[])},$getSize:function(e,t){return this.config.sorting&&!this.config.filtering&&(t+=50),webix.ui.layout.prototype.$getSize.call(this,e,t)},_setRules:function(e){var n=this;e&&e.forEach(function(e){var t;t=e.glue?n._addGroup():n._addRule(),webix.$$(t).setValue(e)})},eachLine:function(e){for(var t=this.queryView({$id:"rows"}).getChildViews(),n=0;n<t.length;n++)t[n].getFilterHelper&&e(t[n])},getValue:function(){var n=[];return this.eachLine(function(e){var t=e.getValue();t&&n.push(t)}),n.length?{glue:this.config.glue,rules:n}:null},setValue:function(e){e.fields&&(this.config.fields=e.fields),e.query&&(e=e.query),e.glue&&(this.config.glue=e.glue),this.reconstruct(),e.rules&&this._setRules(e.rules),this.queryView({$id:"buttons"}).refresh(),this.config.sorting&&this._setSortingValues(e),this._callChangeMethod()},focus:function(){var e=this.queryView({view:"querybuilderline"});e&&e.focus()},getFilterHelper:function(){var i=[],e=this.config.glue;return this.eachLine(function(e){var t=e.getFilterHelper();t&&i.push(t)}),i.length?function(t){var n;return"and"===e?(n=!0,i.forEach(function(e){e(t)||(n=!1)})):(n=!1,i.forEach(function(e){e(t)&&(n=!0)})),n}:function(){return!0}}};function u(e,t,n){return{view:"button",value:e,align:"right",width:120,type:n,click:t}}webix.protoUI(a,n,l,webix.ui.layout,webix.EventSystem),webix.ui.datafilter.queryBuilder=webix.extend({getValue:function(e){return webix.$$(e._comp_id).getValue()},setValue:function(e,t){webix.$$(e._comp_id).setValue(t)},refresh:function(e,t,n){var i=this;e.registerFilter(t,n,this),t._comp_id=e._qb.config.id;var r=webix.$$(t._comp_id).getParentView();this.setValue(t,n),webix.event(t,"click",function(){return i._filterShow(t,r)})},render:function(t,e){var i,n=webix.i18n.querybuilder;e.css="webix_ss_filter",e.prepare=function(){i=t._qb.getFilterHelper()},e.compare=function(e,t,n){return i(n)};var r,o={view:"querybuilder"};e.queryConfig&&webix.extend(o,e.queryConfig);var s={margin:5,rows:[o,{cols:[u(n.filter,function(){if(t._qb){var e=t._qb.getFilterHelper();t.filter(e),r.hide()}},"form"),u(n.cancel,function(){r.hide()}),{}]}]};e.sorting&&s.rows.push(u(n.sort,function(){t._qb&&(t.sort(t._qb.getSortingHelper()),r.hide())}));var l={view:"popup",width:900,body:s};return e.popupConfig&&webix.extend(l,e.popupConfig,!0),r=webix.ui(l),t._qb=r.getBody().getChildViews()[0],t.attachEvent("onDestruct",function(){r.destructor()}),'<div class="webix_qb_filter"><i class="webix_qb_filter_icon" aria-hidden="true"></i></div>'+(e.label||"")},_filterShow:function(e,t){t.show(e.querySelector(".webix_qb_filter"))}},webix.EventSystem)});
//# sourceMappingURL=querybuilder.js.map
