(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([[22],{a4fe:function(t,n,e){},cc96:function(t,n,e){"use strict";e.r(n);var o=function(){var t=this,n=t.$createElement,e=t._self._c||n;return e("div",{staticClass:"root_comment_detail"},[e("NavBar",{attrs:{"child-comment-number":t.childComments.length}}),t.rootComment?e("a-comment",{attrs:{comment:t.rootComment}}):t._e(),t._l(t.childComments,(function(t){return e("a-comment",{key:t.id,attrs:{comment:t,background:"grey"}})}))],2)},a=[],m=function(){var t=this,n=t.$createElement,e=t._self._c||n;return e("div",{staticClass:"nav-bar"},[e("i",{staticClass:"iconfont icon-back",on:{click:function(n){return t.$router.back()}}}),e("span",[t._v(t._s(t.childCommentNumber)+"条回复")]),e("div",{staticClass:"placeholder"})])},c=[],i={name:"NavBar",props:["childCommentNumber"]},r=i,s=(e("f08b"),e("2877")),l=Object(s["a"])(r,m,c,!1,null,"3de30684",null),u=l.exports,d=e("063c"),f=e("4e44"),h={name:"index",components:{AComment:f["a"],NavBar:u},data:function(){return{rootComment:null,childComments:[]}},activated:function(){this.getCommentList(),this.getCommentDetail()},methods:{getCommentList:function(){var t=this;Object(d["c"])({parent:this.$route.params.rootCommentID}).then((function(n){t.childComments=n.data}))},getCommentDetail:function(){var t=this;Object(d["b"])(this.$route.params.rootCommentID).then((function(n){t.rootComment=n.data}))}}},C=h,b=Object(s["a"])(C,o,a,!1,null,"5a4fb9f6",null);n["default"]=b.exports},f08b:function(t,n,e){"use strict";var o=e("a4fe"),a=e.n(o);a.a}}]);