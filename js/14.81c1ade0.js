(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([[14],{"089e":function(t,e,a){},3657:function(t,e,a){"use strict";a.r(e);var i=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"compose"},[a("div",{staticClass:"nav-bar"},[a("i",{staticClass:"iconfont icon-back",on:{click:function(e){return t.$router.back()}}}),a("span",{staticClass:"share-weibo"},[t._v("回复评论")]),a("span",{staticClass:"send-btn",class:{"can-send":t.canSend},on:{click:t.newRecord}},[t._v("发送")])]),a("div",{staticClass:"content-preview"},[a("textarea-autosize",{ref:"textarea",attrs:{rows:"3",placeholder:t.placeholder},nativeOn:{focus:function(e){return t.textareaGetFocus(e)}},model:{value:t.content[t.$route.params.childCommentID],callback:function(e){t.$set(t.content,t.$route.params.childCommentID,e)},expression:"content[$route.params.childCommentID]"}}),a("van-uploader",{directives:[{name:"show",rawName:"v-show",value:t.showPreview,expression:"showPreview"}],ref:"uploader",attrs:{"max-count":"1","before-read":t.beforeRead,"after-read":t.afterRead,multiple:""},scopedSlots:t._u([{key:"default",fn:function(){return[a("div",{staticClass:"upload-area"},[a("i",{staticClass:"iconfont icon-add"})])]},proxy:!0}]),model:{value:t.files,callback:function(e){t.files=e},expression:"files"}}),a("div",{staticClass:"placeholder"}),a("div",{staticClass:"about-the-weibo"},[a("img",{attrs:{src:t.weibo.user.avatar,alt:""}}),a("div",{staticClass:"right"},[a("div",{staticClass:"nickname"},[t._v("@"+t._s(t.weibo.user.nickname))]),a("div",{staticClass:"content ellipsis-2-lines",domProps:{innerHTML:t._s(t.weibo.content)}})])])],1),a("div",{ref:"action",staticClass:"hide-btn"},[a("div",{staticClass:"top"},[a("div",{staticClass:"same-time-share",on:{click:t.toggleSameTimeShareStatus}},[t.isSameTimeShare?a("i",{staticClass:"iconfont icon-checkbox1"}):a("i",{staticClass:"iconfont icon-checkbox2"}),a("span",[t._v("同时转发")])])]),a("div",{staticClass:"center"},[a("i",{staticClass:"iconfont icon-tupian",on:{click:t.chooseFile}}),a("i",{staticClass:"iconfont icon-xiaolian",on:{click:t.toggleEmojiBar}})]),t.showEmojiBar?a("div",{staticClass:"bottom"},[a("van-swipe",t._l(t.swipeItemNumber,(function(e){return a("van-swipe-item",{key:e},[a("div",{staticClass:"img-container-container"},t._l(t.filterEmotions(e),(function(i){return a("div",{key:i.value,staticClass:"emotion-container"},[a("img",{key:i.value,staticClass:"emotion",attrs:{src:i.icon,alt:e.value},on:{click:function(e){return t.confirmEmotion(i.value)}}})])})),0)])})),1)],1):t._e()])])},o=[],n=(a("99af"),a("e260"),a("d81d"),a("fb6a"),a("d3b7"),a("e6cf"),a("ac1f"),a("3ca3"),a("5319"),a("ddb0"),a("6374")),s=a.n(n),r=(a("4b0a"),a("2bb1")),c=(a("7844"),a("5596")),l=(a("e7e5"),a("d399")),m=(a("e930"),a("8f80")),u=a("2b0e"),h=a("922a"),d=a("031f"),p=a("3f9d"),f=a("9b1d"),w=a("063c");u["a"].use(p["a"]),u["a"].use(m["a"]),u["a"].use(l["a"]),u["a"].use(c["a"]),u["a"].use(r["a"]);var b={name:"index",data:function(){return{isSameTimeShare:!1,placeholder:"",rootCommentDetail:{},childCommentDetail:{},replyToCommentDetail:{},showPreview:!1,files:[],publicState:"公开",publicStateIcon:"icon-public",canSend:!1,showEmojiBar:!1,emotions:h["a"],textArea:null,weibo:{user:{}},commentSameTime:!1,content:{}}},computed:{swipeItemNumber:function(){return Math.ceil(this.emotions.length/21)},safeContent:function(){return this.content[this.$route.params.childCommentID]?this.content[this.$route.params.childCommentID].replace(/[<|>]/g,""):this.content[this.$route.params.childCommentID]}},watch:{files:function(t){0===t.length?this.showPreview=!1:1===t.length&&(this.showPreview=!0)},safeContent:function(t){this.canSend=""!==t}},created:function(){window.forwardUserPage=this.forwardUserPage,window.forwardTopicPage=this.forwardTopicPage},activated:function(){this.getRootCommentDetail(),this.getWeiboDetail()},methods:{toggleSameTimeShareStatus:function(){this.isSameTimeShare=!this.isSameTimeShare},textareaGetFocus:function(){this.showEmojiBar=!1},forwardUserPage:function(t,e){t.stopPropagation(),this.$router.push({name:"User",params:{user:e}})},forwardTopicPage:function(t,e){t.stopPropagation(),this.$router.push({name:"Topic",params:{topic:e}})},getWeiboDetail:function(){var t=this;Object(d["a"])(this.$route.params.weiboID).then((function(e){t.weibo=e.data,t.weibo.content=Object(f["a"])(t,t.weibo.content)}))},afterRead:function(){this.showPreview=!0},beforeRead:function(){return!0},chooseFile:function(){this.$refs.uploader.chooseFile(),1===this.files.length&&l["a"].fail("评论区最多只能放一张图片")},load:function(){console.log("加载完毕")},newRecord:function(){var t=this,e=this.content[this.$route.params.childCommentID];if(""===e&&0===this.files.length);else{var a=this.$store.state.user.id;if(a){var i=new window.FormData;""===e&&(e="转发微博");var o="回复@".concat(this.childCommentDetail.user.nickname,"：");i.append("content",o+e),i.append("user",parseInt(this.$store.state.user.id)),i.append("weibo",parseInt(this.$route.params.weiboID)),i.append("parent",parseInt(this.$route.params.rootCommentID)),i.append("reply_to",parseInt(this.$route.params.childCommentID));var n,r=this.files.map((function(t){return t.file})),c=s()(r);try{for(c.s();!(n=c.n()).done;){var l=n.value;i.append("images",l)}}catch(v){c.e(v)}finally{c.f()}if(this.isSameTimeShare){var m=new window.FormData;m.append("content","".concat(e,"//@").concat(this.rootCommentDetail.user.nickname,"：").concat(this.rootCommentDetail.content,"//@").concat(this.childCommentDetail.user.nickname," ").concat(this.childCommentDetail.content)),m.append("user",parseInt(this.$store.state.user.id)),m.append("related_weibo",parseInt(this.$route.params.weiboID));var u,h=this.files.map((function(t){return t.file})),p=s()(h);try{for(p.s();!(u=p.n()).done;){var f=u.value;m.append("images",f)}}catch(v){p.e(v)}finally{p.f()}Promise.all([Object(w["a"])(i),Object(d["d"])(m)]).then((function(e){t.content[t.$route.params.childCommentID]="",t.showEmojiBar=!1,t.isSameTimeShare=!1,t.files=[],t.$router.push(t.$store.state.app.redirectRoute)}))}else Object(w["a"])(i).then((function(e){t.content[t.$route.params.childCommentID]="",t.showEmojiBar=!1,t.isSameTimeShare=!1,t.files=[],t.$router.push(t.$store.state.app.redirectRoute)}))}else{var b=this.$route.path;this.$store.commit("app/SET_REDIRECT_ROUTE",b),this.$router.push({name:"LoginByEmail"})}}},switchPublicState:function(){switch(this.publicState){case"公开":this.publicState="朋友圈",this.publicStateIcon="icon-friend";break;case"朋友圈":this.publicState="私密",this.publicStateIcon="icon-private";break;case"私密":this.publicState="公开",this.publicStateIcon="icon-public";break}},confirmEmotion:function(t){if(window.getSelection)this.textArea.setRangeText(t),this.textArea.selectionStart+=t.length,this.content[this.$route.params.childCommentID]=this.textArea.value;else if(document.selection){var e=document.selection.createRange();e.text=t,this.content[this.$route.params.childCommentID]=this.textArea.value}},toggleEmojiBar:function(){this.showEmojiBar=!this.showEmojiBar,this.textArea=this.$refs.textarea.$el},filterEmotions:function(t){var e=21;return this.emotions.slice(e*(t-1),e*t)},getRootCommentDetail:function(){var t=this;Object(w["b"])(this.$route.params.rootCommentID).then((function(e){t.rootCommentDetail=e.data;var a=t.$route.params.childCommentID;Object(w["b"])(a).then((function(e){t.childCommentDetail=e.data,t.placeholder="@".concat(t.childCommentDetail.user.nickname)}))}))}}},v=b,C=(a("59f3"),a("2877")),g=Object(C["a"])(v,i,o,!1,null,"19d1362d",null);e["default"]=g.exports},"59f3":function(t,e,a){"use strict";var i=a("089e"),o=a.n(i);o.a}}]);