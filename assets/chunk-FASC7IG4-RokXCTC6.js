import{m as y}from"./chunk-ZN7TASNU-BQiOxHaL.js";import{l as ie,Z as f,J as m,a as O,s as b,y as _,f as Ne,b as x,T as Ee,Q as R,O as ae,t as ot,K as de,c as T,X as I,R as q,g as rt,n as S,d as Y,D,h as it,e as at,i as z,j as dt,N as ut}from"./chunk-5ZJXQJOJ-YlUXZbOs.js";import{m as u,n as X,o as st,p as ct}from"./mermaid.esm.min-BcOvSJ43.js";function E(e,n,t,o){var r;do r=ie(o);while(e.hasNode(r));return t.dummy=n,e.setNode(r,t),r}u(E,"addDummyNode");function Oe(e){var n=new y().setGraph(e.graph());return f(e.nodes(),function(t){n.setNode(t,e.node(t))}),f(e.edges(),function(t){var o=n.edge(t.v,t.w)||{weight:0,minlen:1},r=e.edge(t);n.setEdge(t.v,t.w,{weight:o.weight+r.weight,minlen:Math.max(o.minlen,r.minlen)})}),n}u(Oe,"simplify");function ue(e){var n=new y({multigraph:e.isMultigraph()}).setGraph(e.graph());return f(e.nodes(),function(t){e.children(t).length||n.setNode(t,e.node(t))}),f(e.edges(),function(t){n.setEdge(t,e.edge(t))}),n}u(ue,"asNonCompoundGraph");function H(e,n){var t=e.x,o=e.y,r=n.x-t,i=n.y-o,a=e.width/2,d=e.height/2;if(!r&&!i)throw new Error("Not possible to find intersection inside of the rectangle");var s,c;return Math.abs(i)*a>Math.abs(r)*d?(i<0&&(d=-d),s=d*r/i,c=d):(r<0&&(a=-a),s=a,c=a*i/r),{x:t+s,y:o+c}}u(H,"intersectRect");function j(e){var n=m(O(se(e)+1),function(){return[]});return f(e.nodes(),function(t){var o=e.node(t),r=o.rank;b(r)||(n[r][o.order]=t)}),n}u(j,"buildLayerMatrix");function Ie(e){var n=_(m(e.nodes(),function(t){return e.node(t).rank}));f(e.nodes(),function(t){var o=e.node(t);Ne(o,"rank")&&(o.rank-=n)})}u(Ie,"normalizeRanks");function Ce(e){var n=_(m(e.nodes(),function(i){return e.node(i).rank})),t=[];f(e.nodes(),function(i){var a=e.node(i).rank-n;t[a]||(t[a]=[]),t[a].push(i)});var o=0,r=e.graph().nodeRankFactor;f(t,function(i,a){b(i)&&a%r!==0?--o:o&&f(i,function(d){e.node(d).rank+=o})})}u(Ce,"removeEmptyRanks");function K(e,n,t,o){var r={width:0,height:0};return arguments.length>=4&&(r.rank=t,r.order=o),E(e,"border",r,n)}u(K,"addBorderNode");function se(e){return x(m(e.nodes(),function(n){var t=e.node(n).rank;if(!b(t))return t}))}u(se,"maxRank");function Le(e,n){var t={lhs:[],rhs:[]};return f(e,function(o){n(o)?t.lhs.push(o):t.rhs.push(o)}),t}u(Le,"partition");function _e(e,n){var t=Ee();try{return n()}finally{console.log(e+" time: "+(Ee()-t)+"ms")}}u(_e,"time");function Pe(e,n){return n()}u(Pe,"notime");function Re(e){function n(t){var o=e.children(t),r=e.node(t);if(o.length&&f(o,n),Object.prototype.hasOwnProperty.call(r,"minRank")){r.borderLeft=[],r.borderRight=[];for(var i=r.minRank,a=r.maxRank+1;i<a;++i)Z(e,"borderLeft","_bl",t,r,i),Z(e,"borderRight","_br",t,r,i)}}u(n,"dfs"),f(e.children(),n)}u(Re,"addBorderSegments");function Z(e,n,t,o,r,i){var a={width:0,height:0,rank:i,borderType:n},d=r[n][i-1],s=E(e,"border",a,t);r[n][i]=s,e.setParent(s,o),d&&e.setEdge(d,s,{weight:1})}u(Z,"addBorderNode");function Te(e){var n=e.graph().rankdir.toLowerCase();(n==="lr"||n==="rl")&&ce(e)}u(Te,"adjust");function Se(e){var n=e.graph().rankdir.toLowerCase();(n==="bt"||n==="rl")&&je(e),(n==="lr"||n==="rl")&&(Me(e),ce(e))}u(Se,"undo");function ce(e){f(e.nodes(),function(n){Q(e.node(n))}),f(e.edges(),function(n){Q(e.edge(n))})}u(ce,"swapWidthHeight");function Q(e){var n=e.width;e.width=e.height,e.height=n}u(Q,"swapWidthHeightOne");function je(e){f(e.nodes(),function(n){M(e.node(n))}),f(e.edges(),function(n){var t=e.edge(n);f(t.points,M),Object.prototype.hasOwnProperty.call(t,"y")&&M(t)})}u(je,"reverseY");function M(e){e.y=-e.y}u(M,"reverseYOne");function Me(e){f(e.nodes(),function(n){G(e.node(n))}),f(e.edges(),function(n){var t=e.edge(n);f(t.points,G),Object.prototype.hasOwnProperty.call(t,"x")&&G(t)})}u(Me,"swapXY");function G(e){var n=e.x;e.x=e.y,e.y=n}u(G,"swapXYOne");var N,ft=(N=class{constructor(){var n={};n._next=n._prev=n,this._sentinel=n}dequeue(){var n=this._sentinel,t=n._prev;if(t!==n)return U(t),t}enqueue(n){var t=this._sentinel;n._prev&&n._next&&U(n),n._next=t._next,t._next._prev=n,t._next=n,n._prev=t}toString(){for(var n=[],t=this._sentinel,o=t._prev;o!==t;)n.push(JSON.stringify(o,Ge)),o=o._prev;return"["+n.join(", ")+"]"}},u(N,"List"),N);function U(e){e._prev._next=e._next,e._next._prev=e._prev,delete e._next,delete e._prev}u(U,"unlink");function Ge(e,n){if(e!=="_next"&&e!=="_prev")return n}u(Ge,"filterOutLinks");var ht=ct(1);function Be(e,n){if(e.nodeCount()<=1)return[];var t=Ve(e,n||ht),o=Fe(t.graph,t.buckets,t.zeroIdx);return R(m(o,function(r){return e.outEdges(r.v,r.w)}))}u(Be,"greedyFAS");function Fe(e,n,t){for(var o=[],r=n[n.length-1],i=n[0],a;e.nodeCount();){for(;a=i.dequeue();)B(e,n,t,a);for(;a=r.dequeue();)B(e,n,t,a);if(e.nodeCount()){for(var d=n.length-2;d>0;--d)if(a=n[d].dequeue(),a){o=o.concat(B(e,n,t,a,!0));break}}}return o}u(Fe,"doGreedyFAS");function B(e,n,t,o,r){var i=r?[]:void 0;return f(e.inEdges(o.v),function(a){var d=e.edge(a),s=e.node(a.v);r&&i.push({v:a.v,w:a.w}),s.out-=d,$(n,t,s)}),f(e.outEdges(o.v),function(a){var d=e.edge(a),s=a.w,c=e.node(s);c.in-=d,$(n,t,c)}),e.removeNode(o.v),i}u(B,"removeNode");function Ve(e,n){var t=new y,o=0,r=0;f(e.nodes(),function(d){t.setNode(d,{v:d,in:0,out:0})}),f(e.edges(),function(d){var s=t.edge(d.v,d.w)||0,c=n(d),h=s+c;t.setEdge(d.v,d.w,h),r=Math.max(r,t.node(d.v).out+=c),o=Math.max(o,t.node(d.w).in+=c)});var i=O(r+o+3).map(function(){return new ft}),a=o+1;return f(t.nodes(),function(d){$(i,a,t.node(d))}),{graph:t,buckets:i,zeroIdx:a}}u(Ve,"buildState");function $(e,n,t){t.out?t.in?e[t.out-t.in+n].enqueue(t):e[e.length-1].enqueue(t):e[0].enqueue(t)}u($,"assignBucket");function Ye(e){var n=e.graph().acyclicer==="greedy"?Be(e,t(e)):De(e);f(n,function(o){var r=e.edge(o);e.removeEdge(o),r.forwardName=o.name,r.reversed=!0,e.setEdge(o.w,o.v,r,ie("rev"))});function t(o){return function(r){return o.edge(r).weight}}u(t,"weightFn")}u(Ye,"run");function De(e){var n=[],t={},o={};function r(i){Object.prototype.hasOwnProperty.call(o,i)||(o[i]=!0,t[i]=!0,f(e.outEdges(i),function(a){Object.prototype.hasOwnProperty.call(t,a.w)?n.push(a):r(a.w)}),delete t[i])}return u(r,"dfs"),f(e.nodes(),r),n}u(De,"dfsFAS");function $e(e){f(e.edges(),function(n){var t=e.edge(n);if(t.reversed){e.removeEdge(n);var o=t.forwardName;delete t.reversed,delete t.forwardName,e.setEdge(n.w,n.v,t,o)}})}u($e,"undo");function qe(e){e.graph().dummyChains=[],f(e.edges(),function(n){ze(e,n)})}u(qe,"run");function ze(e,n){var t=n.v,o=e.node(t).rank,r=n.w,i=e.node(r).rank,a=n.name,d=e.edge(n),s=d.labelRank;if(i!==o+1){e.removeEdge(n);var c=void 0,h,g;for(g=0,++o;o<i;++g,++o)d.points=[],c={width:0,height:0,edgeLabel:d,edgeObj:n,rank:o},h=E(e,"edge",c,"_d"),o===s&&(c.width=d.width,c.height=d.height,c.dummy="edge-label",c.labelpos=d.labelpos),e.setEdge(t,h,{weight:d.weight},a),g===0&&e.graph().dummyChains.push(h),t=h;e.setEdge(t,r,{weight:d.weight},a)}}u(ze,"normalizeEdge");function Ae(e){f(e.graph().dummyChains,function(n){var t=e.node(n),o=t.edgeLabel,r;for(e.setEdge(t.edgeObj,o);t.dummy;)r=e.successors(n)[0],e.removeNode(n),o.points.push({x:t.x,y:t.y}),t.dummy==="edge-label"&&(o.x=t.x,o.y=t.y,o.width=t.width,o.height=t.height),n=r,t=e.node(n)})}u(Ae,"undo");function A(e){var n={};function t(o){var r=e.node(o);if(Object.prototype.hasOwnProperty.call(n,o))return r.rank;n[o]=!0;var i=_(m(e.outEdges(o),function(a){return t(a.w)-e.edge(a).minlen}));return(i===Number.POSITIVE_INFINITY||i===void 0||i===null)&&(i=0),r.rank=i}u(t,"dfs"),f(e.sources(),t)}u(A,"longestPath");function C(e,n){return e.node(n.w).rank-e.node(n.v).rank-e.edge(n).minlen}u(C,"slack");function fe(e){var n=new y({directed:!1}),t=e.nodes()[0],o=e.nodeCount();n.setNode(t,{});for(var r,i;Je(n,e)<o;)r=We(n,e),i=n.hasNode(r.v)?C(e,r):-C(e,r),Xe(n,e,i);return n}u(fe,"feasibleTree");function Je(e,n){function t(o){f(n.nodeEdges(o),function(r){var i=r.v,a=o===i?r.w:i;!e.hasNode(a)&&!C(n,r)&&(e.setNode(a,{}),e.setEdge(o,a,{}),t(a))})}return u(t,"dfs"),f(e.nodes(),t),e.nodeCount()}u(Je,"tightTree");function We(e,n){return ae(n.edges(),function(t){if(e.hasNode(t.v)!==e.hasNode(t.w))return C(n,t)})}u(We,"findMinSlackEdge");function Xe(e,n,t){f(e.nodes(),function(o){n.node(o).rank+=t})}u(Xe,"shiftRanks");He.CycleException=P;function He(e){var n={},t={},o=[];function r(i){if(Object.prototype.hasOwnProperty.call(t,i))throw new P;Object.prototype.hasOwnProperty.call(n,i)||(t[i]=!0,n[i]=!0,f(e.predecessors(i),r),delete t[i],o.push(i))}if(u(r,"visit"),f(e.sinks(),r),ot(n)!==e.nodeCount())throw new P;return o}u(He,"topsort");function P(){}u(P,"CycleException");P.prototype=new Error;function he(e,n,t){st(n)||(n=[n]);var o=(e.isDirected()?e.successors:e.neighbors).bind(e),r=[],i={};return f(n,function(a){if(!e.hasNode(a))throw new Error("Graph does not have node: "+a);ge(e,a,t==="post",i,o,r)}),r}u(he,"dfs");function ge(e,n,t,o,r,i){Object.prototype.hasOwnProperty.call(o,n)||(o[n]=!0,t||i.push(n),f(r(n),function(a){ge(e,a,t,o,r,i)}),t&&i.push(n))}u(ge,"doDfs");function Ke(e,n){return he(e,n,"post")}u(Ke,"postorder");function Ze(e,n){return he(e,n,"pre")}u(Ze,"preorder");k.initLowLimValues=W;k.initCutValues=J;k.calcCutValue=le;k.leaveEdge=ve;k.enterEdge=me;k.exchangeEdges=we;function k(e){e=Oe(e),A(e);var n=fe(e);W(n),J(n,e);for(var t,o;t=ve(n);)o=me(n,e,t),we(n,e,t,o)}u(k,"networkSimplex");function J(e,n){var t=Ke(e,e.nodes());t=t.slice(0,t.length-1),f(t,function(o){Qe(e,n,o)})}u(J,"initCutValues");function Qe(e,n,t){var o=e.node(t),r=o.parent;e.edge(t,r).cutvalue=le(e,n,t)}u(Qe,"assignCutValue");function le(e,n,t){var o=e.node(t),r=o.parent,i=!0,a=n.edge(t,r),d=0;return a||(i=!1,a=n.edge(r,t)),d=a.weight,f(n.nodeEdges(t),function(s){var c=s.v===t,h=c?s.w:s.v;if(h!==r){var g=c===i,l=n.edge(s).weight;if(d+=g?l:-l,en(e,t,h)){var p=e.edge(t,h).cutvalue;d+=g?-p:p}}}),d}u(le,"calcCutValue");function W(e,n){arguments.length<2&&(n=e.nodes()[0]),pe(e,{},1,n)}u(W,"initLowLimValues");function pe(e,n,t,o,r){var i=t,a=e.node(o);return n[o]=!0,f(e.neighbors(o),function(d){Object.prototype.hasOwnProperty.call(n,d)||(t=pe(e,n,t,d,o))}),a.low=i,a.lim=t++,r?a.parent=r:delete a.parent,t}u(pe,"dfsAssignLowLim");function ve(e){return de(e.edges(),function(n){return e.edge(n).cutvalue<0})}u(ve,"leaveEdge");function me(e,n,t){var o=t.v,r=t.w;n.hasEdge(o,r)||(o=t.w,r=t.v);var i=e.node(o),a=e.node(r),d=i,s=!1;i.lim>a.lim&&(d=a,s=!0);var c=T(n.edges(),function(h){return s===ee(e,e.node(h.v),d)&&s!==ee(e,e.node(h.w),d)});return ae(c,function(h){return C(n,h)})}u(me,"enterEdge");function we(e,n,t,o){var r=t.v,i=t.w;e.removeEdge(r,i),e.setEdge(o.v,o.w,{}),W(e),J(e,n),Ue(e,n)}u(we,"exchangeEdges");function Ue(e,n){var t=de(e.nodes(),function(r){return!n.node(r).parent}),o=Ze(e,t);o=o.slice(1),f(o,function(r){var i=e.node(r).parent,a=n.edge(r,i),d=!1;a||(a=n.edge(i,r),d=!0),n.node(r).rank=n.node(i).rank+(d?a.minlen:-a.minlen)})}u(Ue,"updateRanks");function en(e,n,t){return e.hasEdge(n,t)}u(en,"isTreeEdge");function ee(e,n,t){return t.low<=n.lim&&n.lim<=t.lim}u(ee,"isDescendant");function nn(e){switch(e.graph().ranker){case"network-simplex":ne(e);break;case"tight-tree":tn(e);break;case"longest-path":gt(e);break;default:ne(e)}}u(nn,"rank");var gt=A;function tn(e){A(e),fe(e)}u(tn,"tightTreeRanker");function ne(e){k(e)}u(ne,"networkSimplexRanker");function on(e){var n=E(e,"root",{},"_root"),t=rn(e),o=x(I(t))-1,r=2*o+1;e.graph().nestingRoot=n,f(e.edges(),function(a){e.edge(a).minlen*=r});var i=an(e)+1;f(e.children(),function(a){be(e,n,r,i,o,t,a)}),e.graph().nodeRankFactor=r}u(on,"run");function be(e,n,t,o,r,i,a){var d=e.children(a);if(!d.length){a!==n&&e.setEdge(n,a,{weight:0,minlen:t});return}var s=K(e,"_bt"),c=K(e,"_bb"),h=e.node(a);e.setParent(s,a),h.borderTop=s,e.setParent(c,a),h.borderBottom=c,f(d,function(g){be(e,n,t,o,r,i,g);var l=e.node(g),p=l.borderTop?l.borderTop:g,v=l.borderBottom?l.borderBottom:g,w=l.borderTop?o:2*o,L=p!==v?1:r-i[a]+1;e.setEdge(s,p,{weight:w,minlen:L,nestingEdge:!0}),e.setEdge(v,c,{weight:w,minlen:L,nestingEdge:!0})}),e.parent(a)||e.setEdge(n,s,{weight:0,minlen:r+i[a]})}u(be,"dfs");function rn(e){var n={};function t(o,r){var i=e.children(o);i&&i.length&&f(i,function(a){t(a,r+1)}),n[o]=r}return u(t,"dfs"),f(e.children(),function(o){t(o,1)}),n}u(rn,"treeDepths");function an(e){return q(e.edges(),function(n,t){return n+e.edge(t).weight},0)}u(an,"sumWeights");function dn(e){var n=e.graph();e.removeNode(n.nestingRoot),delete n.nestingRoot,f(e.edges(),function(t){var o=e.edge(t);o.nestingEdge&&e.removeEdge(t)})}u(dn,"cleanup");function un(e,n,t){var o={},r;f(t,function(i){for(var a=e.parent(i),d,s;a;){if(d=e.parent(a),d?(s=o[d],o[d]=a):(s=r,r=a),s&&s!==a){n.setEdge(s,a);return}a=d}})}u(un,"addSubgraphConstraints");function sn(e,n,t){var o=cn(e),r=new y({compound:!0}).setGraph({root:o}).setDefaultNodeLabel(function(i){return e.node(i)});return f(e.nodes(),function(i){var a=e.node(i),d=e.parent(i);(a.rank===n||a.minRank<=n&&n<=a.maxRank)&&(r.setNode(i),r.setParent(i,d||o),f(e[t](i),function(s){var c=s.v===i?s.w:s.v,h=r.edge(c,i),g=b(h)?0:h.weight;r.setEdge(c,i,{weight:e.edge(s).weight+g})}),Object.prototype.hasOwnProperty.call(a,"minRank")&&r.setNode(i,{borderLeft:a.borderLeft[n],borderRight:a.borderRight[n]}))}),r}u(sn,"buildLayerGraph");function cn(e){for(var n;e.hasNode(n=ie("_root")););return n}u(cn,"createRootNode");function fn(e,n){for(var t=0,o=1;o<n.length;++o)t+=hn(e,n[o-1],n[o]);return t}u(fn,"crossCount");function hn(e,n,t){for(var o=rt(t,m(t,function(c,h){return h})),r=R(m(n,function(c){return S(m(e.outEdges(c),function(h){return{pos:o[h.w],weight:e.edge(h).weight}}),"pos")})),i=1;i<t.length;)i<<=1;var a=2*i-1;i-=1;var d=m(new Array(a),function(){return 0}),s=0;return f(r.forEach(function(c){var h=c.pos+i;d[h]+=c.weight;for(var g=0;h>0;)h%2&&(g+=d[h+1]),h=h-1>>1,d[h]+=c.weight;s+=c.weight*g})),s}u(hn,"twoLayerCrossCount");function gn(e){var n={},t=T(e.nodes(),function(d){return!e.children(d).length}),o=x(m(t,function(d){return e.node(d).rank})),r=m(O(o+1),function(){return[]});function i(d){if(!Ne(n,d)){n[d]=!0;var s=e.node(d);r[s.rank].push(d),f(e.successors(d),i)}}u(i,"dfs");var a=S(t,function(d){return e.node(d).rank});return f(a,i),r}u(gn,"initOrder");function ln(e,n){return m(n,function(t){var o=e.inEdges(t);if(o.length){var r=q(o,function(i,a){var d=e.edge(a),s=e.node(a.v);return{sum:i.sum+d.weight*s.order,weight:i.weight+d.weight}},{sum:0,weight:0});return{v:t,barycenter:r.sum/r.weight,weight:r.weight}}else return{v:t}})}u(ln,"barycenter");function pn(e,n){var t={};f(e,function(r,i){var a=t[r.v]={indegree:0,in:[],out:[],vs:[r.v],i};b(r.barycenter)||(a.barycenter=r.barycenter,a.weight=r.weight)}),f(n.edges(),function(r){var i=t[r.v],a=t[r.w];!b(i)&&!b(a)&&(a.indegree++,i.out.push(t[r.w]))});var o=T(t,function(r){return!r.indegree});return vn(o)}u(pn,"resolveConflicts");function vn(e){var n=[];function t(i){return function(a){a.merged||(b(a.barycenter)||b(i.barycenter)||a.barycenter>=i.barycenter)&&mn(i,a)}}u(t,"handleIn");function o(i){return function(a){a.in.push(i),--a.indegree===0&&e.push(a)}}for(u(o,"handleOut");e.length;){var r=e.pop();n.push(r),f(r.in.reverse(),t(r)),f(r.out,o(r))}return m(T(n,function(i){return!i.merged}),function(i){return Y(i,["vs","i","barycenter","weight"])})}u(vn,"doResolveConflicts");function mn(e,n){var t=0,o=0;e.weight&&(t+=e.barycenter*e.weight,o+=e.weight),n.weight&&(t+=n.barycenter*n.weight,o+=n.weight),e.vs=n.vs.concat(e.vs),e.barycenter=t/o,e.weight=o,e.i=Math.min(n.i,e.i),n.merged=!0}u(mn,"mergeEntries");function wn(e,n){var t=Le(e,function(h){return Object.prototype.hasOwnProperty.call(h,"barycenter")}),o=t.lhs,r=S(t.rhs,function(h){return-h.i}),i=[],a=0,d=0,s=0;o.sort(bn(!!n)),s=te(i,r,s),f(o,function(h){s+=h.vs.length,i.push(h.vs),a+=h.barycenter*h.weight,d+=h.weight,s=te(i,r,s)});var c={vs:R(i)};return d&&(c.barycenter=a/d,c.weight=d),c}u(wn,"sort");function te(e,n,t){for(var o;n.length&&(o=D(n)).i<=t;)n.pop(),e.push(o.vs),t++;return t}u(te,"consumeUnsortable");function bn(e){return function(n,t){return n.barycenter<t.barycenter?-1:n.barycenter>t.barycenter?1:e?t.i-n.i:n.i-t.i}}u(bn,"compareWithBias");function ye(e,n,t,o){var r=e.children(n),i=e.node(n),a=i?i.borderLeft:void 0,d=i?i.borderRight:void 0,s={};a&&(r=T(r,function(v){return v!==a&&v!==d}));var c=ln(e,r);f(c,function(v){if(e.children(v.v).length){var w=ye(e,v.v,t,o);s[v.v]=w,Object.prototype.hasOwnProperty.call(w,"barycenter")&&kn(v,w)}});var h=pn(c,t);yn(h,s);var g=wn(h,o);if(a&&(g.vs=R([a,g.vs,d]),e.predecessors(a).length)){var l=e.node(e.predecessors(a)[0]),p=e.node(e.predecessors(d)[0]);Object.prototype.hasOwnProperty.call(g,"barycenter")||(g.barycenter=0,g.weight=0),g.barycenter=(g.barycenter*g.weight+l.order+p.order)/(g.weight+2),g.weight+=2}return g}u(ye,"sortSubgraph");function yn(e,n){f(e,function(t){t.vs=R(t.vs.map(function(o){return n[o]?n[o].vs:o}))})}u(yn,"expandSubgraphs");function kn(e,n){b(e.barycenter)?(e.barycenter=n.barycenter,e.weight=n.weight):(e.barycenter=(e.barycenter*e.weight+n.barycenter*n.weight)/(e.weight+n.weight),e.weight+=n.weight)}u(kn,"mergeBarycenters");function xn(e){var n=se(e),t=oe(e,O(1,n+1),"inEdges"),o=oe(e,O(n-1,-1,-1),"outEdges"),r=gn(e);re(e,r);for(var i=Number.POSITIVE_INFINITY,a,d=0,s=0;s<4;++d,++s){En(d%2?t:o,d%4>=2),r=j(e);var c=fn(e,r);c<i&&(s=0,a=it(r),i=c)}re(e,a)}u(xn,"order");function oe(e,n,t){return m(n,function(o){return sn(e,o,t)})}u(oe,"buildLayerGraphs");function En(e,n){var t=new y;f(e,function(o){var r=o.graph().root,i=ye(o,r,t,n);f(i.vs,function(a,d){o.node(a).order=d}),un(o,t,i.vs)})}u(En,"sweepLayerGraphs");function re(e,n){f(n,function(t){f(t,function(o,r){e.node(o).order=r})})}u(re,"assignOrder");function Nn(e){var n=In(e);f(e.graph().dummyChains,function(t){for(var o=e.node(t),r=o.edgeObj,i=On(e,n,r.v,r.w),a=i.path,d=i.lca,s=0,c=a[s],h=!0;t!==r.w;){if(o=e.node(t),h){for(;(c=a[s])!==d&&e.node(c).maxRank<o.rank;)s++;c===d&&(h=!1)}if(!h){for(;s<a.length-1&&e.node(c=a[s+1]).minRank<=o.rank;)s++;c=a[s]}e.setParent(t,c),t=e.successors(t)[0]}})}u(Nn,"parentDummyChains");function On(e,n,t,o){var r=[],i=[],a=Math.min(n[t].low,n[o].low),d=Math.max(n[t].lim,n[o].lim),s,c;s=t;do s=e.parent(s),r.push(s);while(s&&(n[s].low>a||d>n[s].lim));for(c=s,s=o;(s=e.parent(s))!==c;)i.push(s);return{path:r.concat(i.reverse()),lca:c}}u(On,"findPath");function In(e){var n={},t=0;function o(r){var i=t;f(e.children(r),o),n[r]={low:i,lim:t++}}return u(o,"dfs"),f(e.children(),o),n}u(In,"postorder");function Cn(e,n){var t={};function o(r,i){var a=0,d=0,s=r.length,c=D(i);return f(i,function(h,g){var l=_n(e,h),p=l?e.node(l).order:s;(l||h===c)&&(f(i.slice(d,g+1),function(v){f(e.predecessors(v),function(w){var L=e.node(w),xe=L.order;(xe<a||p<xe)&&!(L.dummy&&e.node(v).dummy)&&ke(t,w,v)})}),d=g+1,a=p)}),i}return u(o,"visitLayer"),q(n,o),t}u(Cn,"findType1Conflicts");function Ln(e,n){var t={};function o(i,a,d,s,c){var h;f(O(a,d),function(g){h=i[g],e.node(h).dummy&&f(e.predecessors(h),function(l){var p=e.node(l);p.dummy&&(p.order<s||p.order>c)&&ke(t,l,h)})})}u(o,"scan");function r(i,a){var d=-1,s,c=0;return f(a,function(h,g){if(e.node(h).dummy==="border"){var l=e.predecessors(h);l.length&&(s=e.node(l[0]).order,o(a,c,g,d,s),c=g,d=s)}o(a,c,a.length,s,i.length)}),a}return u(r,"visitLayer"),q(n,r),t}u(Ln,"findType2Conflicts");function _n(e,n){if(e.node(n).dummy)return de(e.predecessors(n),function(t){return e.node(t).dummy})}u(_n,"findOtherInnerSegmentNode");function ke(e,n,t){if(n>t){var o=n;n=t,t=o}var r=e[n];r||(e[n]=r={}),r[t]=!0}u(ke,"addConflict");function Pn(e,n,t){if(n>t){var o=n;n=t,t=o}return!!e[n]&&Object.prototype.hasOwnProperty.call(e[n],t)}u(Pn,"hasConflict");function Rn(e,n,t,o){var r={},i={},a={};return f(n,function(d){f(d,function(s,c){r[s]=s,i[s]=s,a[s]=c})}),f(n,function(d){var s=-1;f(d,function(c){var h=o(c);if(h.length){h=S(h,function(w){return a[w]});for(var g=(h.length-1)/2,l=Math.floor(g),p=Math.ceil(g);l<=p;++l){var v=h[l];i[c]===c&&s<a[v]&&!Pn(t,c,v)&&(i[v]=c,i[c]=r[c]=r[v],s=a[v])}}})}),{root:r,align:i}}u(Rn,"verticalAlignment");function Tn(e,n,t,o,r){var i={},a=Sn(e,n,t,r),d=r?"borderLeft":"borderRight";function s(g,l){for(var p=a.nodes(),v=p.pop(),w={};v;)w[v]?g(v):(w[v]=!0,p.push(v),p=p.concat(l(v))),v=p.pop()}u(s,"iterate");function c(g){i[g]=a.inEdges(g).reduce(function(l,p){return Math.max(l,i[p.v]+a.edge(p))},0)}u(c,"pass1");function h(g){var l=a.outEdges(g).reduce(function(v,w){return Math.min(v,i[w.w]-a.edge(w))},Number.POSITIVE_INFINITY),p=e.node(g);l!==Number.POSITIVE_INFINITY&&p.borderType!==d&&(i[g]=Math.max(i[g],l))}return u(h,"pass2"),s(c,a.predecessors.bind(a)),s(h,a.successors.bind(a)),f(o,function(g){i[g]=i[t[g]]}),i}u(Tn,"horizontalCompaction");function Sn(e,n,t,o){var r=new y,i=e.graph(),a=Fn(i.nodesep,i.edgesep,o);return f(n,function(d){var s;f(d,function(c){var h=t[c];if(r.setNode(h),s){var g=t[s],l=r.edge(g,h);r.setEdge(g,h,Math.max(a(e,c,s),l||0))}s=c})}),r}u(Sn,"buildBlockGraph");function jn(e,n){return ae(I(n),function(t){var o=Number.NEGATIVE_INFINITY,r=Number.POSITIVE_INFINITY;return at(t,function(i,a){var d=Vn(e,a)/2;o=Math.max(i+d,o),r=Math.min(i-d,r)}),o-r})}u(jn,"findSmallestWidthAlignment");function Mn(e,n){var t=I(n),o=_(t),r=x(t);f(["u","d"],function(i){f(["l","r"],function(a){var d=i+a,s=e[d],c;if(s!==n){var h=I(s);c=a==="l"?o-_(h):r-x(h),c&&(e[d]=z(s,function(g){return g+c}))}})})}u(Mn,"alignCoordinates");function Gn(e,n){return z(e.ul,function(t,o){if(n)return e[n.toLowerCase()][o];var r=S(m(e,o));return(r[1]+r[2])/2})}u(Gn,"balance");function Bn(e){var n=j(e),t=X(Cn(e,n),Ln(e,n)),o={},r;f(["u","d"],function(a){r=a==="u"?n:I(n).reverse(),f(["l","r"],function(d){d==="r"&&(r=m(r,function(g){return I(g).reverse()}));var s=(a==="u"?e.predecessors:e.successors).bind(e),c=Rn(e,r,t,s),h=Tn(e,r,c.root,c.align,d==="r");d==="r"&&(h=z(h,function(g){return-g})),o[a+d]=h})});var i=jn(e,o);return Mn(o,i),Gn(o,e.graph().align)}u(Bn,"positionX");function Fn(e,n,t){return function(o,r,i){var a=o.node(r),d=o.node(i),s=0,c;if(s+=a.width/2,Object.prototype.hasOwnProperty.call(a,"labelpos"))switch(a.labelpos.toLowerCase()){case"l":c=-a.width/2;break;case"r":c=a.width/2;break}if(c&&(s+=t?c:-c),c=0,s+=(a.dummy?n:e)/2,s+=(d.dummy?n:e)/2,s+=d.width/2,Object.prototype.hasOwnProperty.call(d,"labelpos"))switch(d.labelpos.toLowerCase()){case"l":c=d.width/2;break;case"r":c=-d.width/2;break}return c&&(s+=t?c:-c),c=0,s}}u(Fn,"sep");function Vn(e,n){return e.node(n).width}u(Vn,"width");function Yn(e){e=ue(e),Dn(e),dt(Bn(e),function(n,t){e.node(t).x=n})}u(Yn,"position");function Dn(e){var n=j(e),t=e.graph().ranksep,o=0;f(n,function(r){var i=x(m(r,function(a){return e.node(a).height}));f(r,function(a){e.node(a).y=o+i/2}),o+=i+t})}u(Dn,"positionY");function lt(e,n){var t=n&&n.debugTiming?_e:Pe;t("layout",()=>{var o=t("  buildLayoutGraph",()=>zn(e));t("  runLayout",()=>$n(o,t)),t("  updateInputGraph",()=>qn(e,o))})}u(lt,"layout");function $n(e,n){n("    makeSpaceForEdgeLabels",()=>An(e)),n("    removeSelfEdges",()=>et(e)),n("    acyclic",()=>Ye(e)),n("    nestingGraph.run",()=>on(e)),n("    rank",()=>nn(ue(e))),n("    injectEdgeLabelProxies",()=>Jn(e)),n("    removeEmptyRanks",()=>Ce(e)),n("    nestingGraph.cleanup",()=>dn(e)),n("    normalizeRanks",()=>Ie(e)),n("    assignRankMinMax",()=>Wn(e)),n("    removeEdgeLabelProxies",()=>Xn(e)),n("    normalize.run",()=>qe(e)),n("    parentDummyChains",()=>Nn(e)),n("    addBorderSegments",()=>Re(e)),n("    order",()=>xn(e)),n("    insertSelfEdges",()=>nt(e)),n("    adjustCoordinateSystem",()=>Te(e)),n("    position",()=>Yn(e)),n("    positionSelfEdges",()=>tt(e)),n("    removeBorderNodes",()=>Un(e)),n("    normalize.undo",()=>Ae(e)),n("    fixupEdgeLabelCoords",()=>Zn(e)),n("    undoCoordinateSystem",()=>Se(e)),n("    translateGraph",()=>Hn(e)),n("    assignNodeIntersects",()=>Kn(e)),n("    reversePoints",()=>Qn(e)),n("    acyclic.undo",()=>$e(e))}u($n,"runLayout");function qn(e,n){f(e.nodes(),function(t){var o=e.node(t),r=n.node(t);o&&(o.x=r.x,o.y=r.y,n.children(t).length&&(o.width=r.width,o.height=r.height))}),f(e.edges(),function(t){var o=e.edge(t),r=n.edge(t);o.points=r.points,Object.prototype.hasOwnProperty.call(r,"x")&&(o.x=r.x,o.y=r.y)}),e.graph().width=n.graph().width,e.graph().height=n.graph().height}u(qn,"updateInputGraph");var pt=["nodesep","edgesep","ranksep","marginx","marginy"],vt={ranksep:50,edgesep:20,nodesep:50,rankdir:"tb"},mt=["acyclicer","ranker","rankdir","align"],wt=["width","height"],bt={width:0,height:0},yt=["minlen","weight","width","height","labeloffset"],kt={minlen:1,weight:1,width:0,height:0,labeloffset:10,labelpos:"r"},xt=["labelpos"];function zn(e){var n=new y({multigraph:!0,compound:!0}),t=V(e.graph());return n.setGraph(X({},vt,F(t,pt),Y(t,mt))),f(e.nodes(),function(o){var r=V(e.node(o));n.setNode(o,ut(F(r,wt),bt)),n.setParent(o,e.parent(o))}),f(e.edges(),function(o){var r=V(e.edge(o));n.setEdge(o,X({},kt,F(r,yt),Y(r,xt)))}),n}u(zn,"buildLayoutGraph");function An(e){var n=e.graph();n.ranksep/=2,f(e.edges(),function(t){var o=e.edge(t);o.minlen*=2,o.labelpos.toLowerCase()!=="c"&&(n.rankdir==="TB"||n.rankdir==="BT"?o.width+=o.labeloffset:o.height+=o.labeloffset)})}u(An,"makeSpaceForEdgeLabels");function Jn(e){f(e.edges(),function(n){var t=e.edge(n);if(t.width&&t.height){var o=e.node(n.v),r=e.node(n.w),i={rank:(r.rank-o.rank)/2+o.rank,e:n};E(e,"edge-proxy",i,"_ep")}})}u(Jn,"injectEdgeLabelProxies");function Wn(e){var n=0;f(e.nodes(),function(t){var o=e.node(t);o.borderTop&&(o.minRank=e.node(o.borderTop).rank,o.maxRank=e.node(o.borderBottom).rank,n=x(n,o.maxRank))}),e.graph().maxRank=n}u(Wn,"assignRankMinMax");function Xn(e){f(e.nodes(),function(n){var t=e.node(n);t.dummy==="edge-proxy"&&(e.edge(t.e).labelRank=t.rank,e.removeNode(n))})}u(Xn,"removeEdgeLabelProxies");function Hn(e){var n=Number.POSITIVE_INFINITY,t=0,o=Number.POSITIVE_INFINITY,r=0,i=e.graph(),a=i.marginx||0,d=i.marginy||0;function s(c){var h=c.x,g=c.y,l=c.width,p=c.height;n=Math.min(n,h-l/2),t=Math.max(t,h+l/2),o=Math.min(o,g-p/2),r=Math.max(r,g+p/2)}u(s,"getExtremes"),f(e.nodes(),function(c){s(e.node(c))}),f(e.edges(),function(c){var h=e.edge(c);Object.prototype.hasOwnProperty.call(h,"x")&&s(h)}),n-=a,o-=d,f(e.nodes(),function(c){var h=e.node(c);h.x-=n,h.y-=o}),f(e.edges(),function(c){var h=e.edge(c);f(h.points,function(g){g.x-=n,g.y-=o}),Object.prototype.hasOwnProperty.call(h,"x")&&(h.x-=n),Object.prototype.hasOwnProperty.call(h,"y")&&(h.y-=o)}),i.width=t-n+a,i.height=r-o+d}u(Hn,"translateGraph");function Kn(e){f(e.edges(),function(n){var t=e.edge(n),o=e.node(n.v),r=e.node(n.w),i,a;t.points?(i=t.points[0],a=t.points[t.points.length-1]):(t.points=[],i=r,a=o),t.points.unshift(H(o,i)),t.points.push(H(r,a))})}u(Kn,"assignNodeIntersects");function Zn(e){f(e.edges(),function(n){var t=e.edge(n);if(Object.prototype.hasOwnProperty.call(t,"x"))switch((t.labelpos==="l"||t.labelpos==="r")&&(t.width-=t.labeloffset),t.labelpos){case"l":t.x-=t.width/2+t.labeloffset;break;case"r":t.x+=t.width/2+t.labeloffset;break}})}u(Zn,"fixupEdgeLabelCoords");function Qn(e){f(e.edges(),function(n){var t=e.edge(n);t.reversed&&t.points.reverse()})}u(Qn,"reversePointsForReversedEdges");function Un(e){f(e.nodes(),function(n){if(e.children(n).length){var t=e.node(n),o=e.node(t.borderTop),r=e.node(t.borderBottom),i=e.node(D(t.borderLeft)),a=e.node(D(t.borderRight));t.width=Math.abs(a.x-i.x),t.height=Math.abs(r.y-o.y),t.x=i.x+t.width/2,t.y=o.y+t.height/2}}),f(e.nodes(),function(n){e.node(n).dummy==="border"&&e.removeNode(n)})}u(Un,"removeBorderNodes");function et(e){f(e.edges(),function(n){if(n.v===n.w){var t=e.node(n.v);t.selfEdges||(t.selfEdges=[]),t.selfEdges.push({e:n,label:e.edge(n)}),e.removeEdge(n)}})}u(et,"removeSelfEdges");function nt(e){var n=j(e);f(n,function(t){var o=0;f(t,function(r,i){var a=e.node(r);a.order=i+o,f(a.selfEdges,function(d){E(e,"selfedge",{width:d.label.width,height:d.label.height,rank:a.rank,order:i+ ++o,e:d.e,label:d.label},"_se")}),delete a.selfEdges})})}u(nt,"insertSelfEdges");function tt(e){f(e.nodes(),function(n){var t=e.node(n);if(t.dummy==="selfedge"){var o=e.node(t.e.v),r=o.x+o.width/2,i=o.y,a=t.x-r,d=o.height/2;e.setEdge(t.e,t.label),e.removeNode(n),t.label.points=[{x:r+2*a/3,y:i-d},{x:r+5*a/6,y:i-d},{x:r+a,y:i},{x:r+5*a/6,y:i+d},{x:r+2*a/3,y:i+d}],t.label.x=t.x,t.label.y=t.y}})}u(tt,"positionSelfEdges");function F(e,n){return z(Y(e,n),Number)}u(F,"selectNumberAttrs");function V(e){var n={};return f(e,function(t,o){n[o.toLowerCase()]=t}),n}u(V,"canonicalize");export{lt as f};
