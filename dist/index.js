"use strict";var S=function(v,r){return function(){try{return r||v((r={exports:{}}).exports,r),r.exports}catch(a){throw (r=0, a)}};};var y=S(function(Y,b){
var D=require('@stdlib/math-base-special-sincos/dist').assign,E=require('@stdlib/constants-float64-two-pi/dist'),G=require('@stdlib/math-base-special-floor/dist'),H=require('@stdlib/fft-base-fftpack-generic-decompose/dist'),J=[3,4,2,5];function K(v,r,a,u,f,n,h){var q,j,p,x,C,L,g,m,i,A,P,c,I,M,O,R,_,o;for(L=H(v,4,J,1,0,f,n,h),p=E/v,o=0,i=1,x=h+2*n,P=2*a,R=0;R<L;R++){for(q=f[x],m=q*i,M=G(v/m),A=0,C=2*M+2,_=1;_<q;_++){for(I=o,c=u+o*a,r[c]=1,r[c+a]=0,A+=i,j=A*p,g=1,c+=3*a,O=3;O<C;O+=2)D(g*j,r,-a,c),g+=1,c+=P;o+=2*M,q>5&&(r[u+I*a]=r[u+o*a],r[u+(I+1)*a]=r[u+(o+1)*a])}i=m,x+=n}}b.exports=K
});var B=S(function(Z,z){
var Q=y();function U(v,r,a,u){var f,n;return v===1||(f=u+2*v*a,n=f+2*v*a,Q(v,r,a,f,r,a,n)),r}z.exports=U
});var V=B();module.exports=V;
/** @license Apache-2.0 */
/** @license Apache-2.0 */
//# sourceMappingURL=index.js.map
