class MatchHeight{constructor(b,a=null,c=!0){this.element=b,this.parent=a?document.querySelectorAll(a):document,this.byrow=c,this.elements=[],window.addEventListener("load",()=>{this.getParents()}),window.addEventListener("resize",()=>{setTimeout(()=>{this.elements&&this.elements.forEach(a=>{this.setLargestHeight(a)})})})}getParents(){if(this.parent.length)this.parent.forEach(b=>{let a=b.querySelectorAll(this.element);a.length&&this.setRows(a)});else{let a=document.querySelectorAll(this.element);a.length&&this.setRows(a)}}setRows(a){if(this.byrow){let b=[];a.forEach(a=>{b[a.getBoundingClientRect().top+window.scrollY]=[]}),a.forEach(a=>{b[a.getBoundingClientRect().top+window.scrollY].push(a)}),b.forEach(a=>{this.setLargestHeight(a)})}else this.setLargestHeight(a)}setLargestHeight(a){let b=[];this.elements.push(a),a.forEach(a=>{a.style.height=null,b.push(a.offsetHeight)});let c=Math.max.apply(Math,b);a.forEach(a=>{a.style.height=c+"px"})}}