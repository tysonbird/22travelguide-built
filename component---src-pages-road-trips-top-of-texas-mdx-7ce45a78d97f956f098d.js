(window.webpackJsonp=window.webpackJsonp||[]).push([[33],{BAC9:function(e,a,t){e.exports={bxTextTruncateEnd:"EditLink-module--bx--text-truncate--end--2pqje",bxTextTruncateFront:"EditLink-module--bx--text-truncate--front--3_lIE",link:"EditLink-module--link--1qzW3",row:"EditLink-module--row--1B9Gk"}},I8xM:function(e,a,t){e.exports={bxTextTruncateEnd:"PageTabs-module--bx--text-truncate--end--267NA",bxTextTruncateFront:"PageTabs-module--bx--text-truncate--front--3xEQF",tabsContainer:"PageTabs-module--tabs-container--8N4k0",list:"PageTabs-module--list--3eFQc",listItem:"PageTabs-module--list-item--nUmtD",link:"PageTabs-module--link--1mDJ1",selectedItem:"PageTabs-module--selected-item--YPVr3"}},QH2O:function(e,a,t){e.exports={bxTextTruncateEnd:"PageHeader-module--bx--text-truncate--end--mZWeX",bxTextTruncateFront:"PageHeader-module--bx--text-truncate--front--3zvrI",pageHeader:"PageHeader-module--page-header--3hIan",darkMode:"PageHeader-module--dark-mode--hBrwL",withTabs:"PageHeader-module--with-tabs--3nKxA",text:"PageHeader-module--text--o9LFq"}},XbGe:function(e,a,t){"use strict";var A=t("q1tI"),i=t.n(A),n=t("NmYn"),r=t.n(n),o=t("Wbzz"),s=t("u60D"),l=t("a7k6"),c=t("TSYQ"),d=t.n(c),b=t("QH2O"),p=t.n(b),h=t("qKvR"),u=function(e){var a,t=e.title,A=e.theme,i=e.tabs,n=void 0===i?[]:i;return Object(h.b)("div",{className:d()(p.a.pageHeader,(a={},a[p.a.withTabs]=n.length,a[p.a.darkMode]="dark"===A,a))},Object(h.b)("div",{className:"bx--grid"},Object(h.b)("div",{className:"bx--row"},Object(h.b)("div",{className:"bx--col-lg-12"},Object(h.b)("h1",{id:"page-title",className:p.a.text},t)))))},m=t("BAC9"),g=function(e){var a=e.relativePagePath,t=e.repository,A=Object(o.useStaticQuery)("1364590287").site.siteMetadata.repository,i=t||A,n=i.baseUrl,r=i.subDirectory,s=n+"/edit/"+i.branch+r+"/src/pages"+a;return n?Object(h.b)("div",{className:"bx--row "+m.row},Object(h.b)("div",{className:"bx--col"},Object(h.b)("a",{className:m.link,href:s},"Edit this page on GitHub"))):null},f=t("FCXl"),k=t("dI71"),w=t("I8xM"),j=function(e){function a(){return e.apply(this,arguments)||this}return Object(k.a)(a,e),a.prototype.render=function(){var e=this.props,a=e.title,t=e.tabs,A=e.slug,i=A.split("/").filter(Boolean).slice(-1)[0],n=t.map((function(e){var a,t=r()(e,{lower:!0,strict:!0}),n=t===i,s=new RegExp(i+"/?(#.*)?$"),l=A.replace(s,t);return Object(h.b)("li",{key:e,className:d()((a={},a[w.selectedItem]=n,a),w.listItem)},Object(h.b)(o.Link,{className:w.link,to:""+l},e))}));return Object(h.b)("div",{className:w.tabsContainer},Object(h.b)("div",{className:"bx--grid"},Object(h.b)("div",{className:"bx--row"},Object(h.b)("div",{className:"bx--col-lg-12 bx--col-no-gutter"},Object(h.b)("nav",{"aria-label":a},Object(h.b)("ul",{className:w.list},n))))))},a}(i.a.Component),x=t("MjG9"),B=t("CzIb");a.a=function(e){var a=e.pageContext,t=e.children,A=e.location,i=e.Title,n=a.frontmatter,c=void 0===n?{}:n,d=a.relativePagePath,b=a.titleType,p=c.tabs,m=c.title,k=c.theme,w=c.description,y=c.keywords,O=c.featuredImage,E=Object(B.a)().interiorTheme,N=Object(o.useStaticQuery)("3938494").site.pathPrefix,P=N?A.pathname.replace(N,""):A.pathname,v=p?P.split("/").filter(Boolean).slice(-1)[0]||r()(p[0],{lower:!0}):"",Q=k||E;return Object(h.b)(l.a,{tabs:p,homepage:!1,theme:Q,pageTitle:m,pageDescription:w,pageKeywords:y,titleType:b,featuredImage:O},Object(h.b)(u,{title:i?Object(h.b)(i,null):m,label:"label",tabs:p,theme:Q}),p&&Object(h.b)(j,{title:m,slug:P,tabs:p,currentTab:v}),Object(h.b)(x.a,{padded:!0},t,Object(h.b)(g,{relativePagePath:d})),Object(h.b)(f.a,{pageContext:a,location:A,slug:P,tabs:p,currentTab:v}),Object(h.b)(s.a,null))}},gMUn:function(e,a,t){"use strict";t.r(a),t.d(a,"Title",(function(){return o})),t.d(a,"_frontmatter",(function(){return s})),t.d(a,"default",(function(){return m}));var A=t("wx14"),i=t("zLVn"),n=(t("q1tI"),t("7ljp")),r=t("XbGe"),o=(t("qKvR"),function(){return Object(n.b)("span",null,"Reaching New Heights")}),s={},l=function(e){return function(a){return console.warn("Component "+e+" was not imported, exported, or provided by MDXProvider as global scope"),Object(n.b)("div",a)}},c=l("PageDescription"),d=l("Caption"),b=l("Row"),p=l("Column"),h={Title:o,_frontmatter:s},u=r.a;function m(e){var a=e.components,t=Object(i.a)(e,["components"]);return Object(n.b)(u,Object(A.a)({},h,t,{components:a,mdxType:"MDXLayout"}),Object(n.b)(c,{mdxType:"PageDescription"},Object(n.b)("p",null,"State parks are making the outdoors more accessible")),Object(n.b)("p",null,Object(n.b)("strong",{parentName:"p"},"By Julia Jones")),Object(n.b)("span",{className:"gatsby-resp-image-wrapper",style:{position:"relative",display:"block",marginLeft:"auto",marginRight:"auto",maxWidth:"1152px"}},"\n      ",Object(n.b)("span",{parentName:"span",className:"gatsby-resp-image-background-image",style:{paddingBottom:"66.66666666666666%",position:"relative",bottom:"0",left:"0",backgroundImage:"url('data:image/jpeg;base64,/9j/2wBDABALDA4MChAODQ4SERATGCgaGBYWGDEjJR0oOjM9PDkzODdASFxOQERXRTc4UG1RV19iZ2hnPk1xeXBkeFxlZ2P/2wBDARESEhgVGC8aGi9jQjhCY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2P/wgARCAANABQDASIAAhEBAxEB/8QAGAAAAwEBAAAAAAAAAAAAAAAAAAEEAwX/xAAVAQEBAAAAAAAAAAAAAAAAAAABAv/aAAwDAQACEAMQAAABThrqNTlif//EABoQAAMAAwEAAAAAAAAAAAAAAAABAgMTMUH/2gAIAQEAAQUCWOSYhrUieeH/xAAWEQADAAAAAAAAAAAAAAAAAAAAARP/2gAIAQMBAT8BmiaP/8QAFhEAAwAAAAAAAAAAAAAAAAAAAAET/9oACAECAQE/AaMoz//EABwQAAIBBQEAAAAAAAAAAAAAAAARMQECEDJBkf/aAAgBAQAGPwLYbROKWqTvp//EABoQAQADAQEBAAAAAAAAAAAAAAEAESFBUTH/2gAIAQEAAT8hTxLCOk2Pijx79giwIblApeXkf//aAAwDAQACAAMAAAAQ2z//xAAVEQEBAAAAAAAAAAAAAAAAAAAQEf/aAAgBAwEBPxC4/wD/xAAWEQADAAAAAAAAAAAAAAAAAAABEEH/2gAIAQIBAT8QM0//xAAbEAACAgMBAAAAAAAAAAAAAAABEQAhMUFxkf/aAAgBAQABPxBXOng0GCnyN0YRZLJ5EseRzfJ6ZgIQGC0Cf//Z')",backgroundSize:"cover",display:"block"}}),"\n  ",Object(n.b)("img",{parentName:"span",className:"gatsby-resp-image-image",alt:"A man stands next to a concrete marker at the top of a rocky mountain",title:"A man stands next to a concrete marker at the top of a rocky mountain",src:"/static/87a2442c6f5e72f8a9f8751133dbd5cf/2e753/top-texas-guadalupe-peak-summit.jpg",srcSet:["/static/87a2442c6f5e72f8a9f8751133dbd5cf/69549/top-texas-guadalupe-peak-summit.jpg 288w","/static/87a2442c6f5e72f8a9f8751133dbd5cf/473e3/top-texas-guadalupe-peak-summit.jpg 576w","/static/87a2442c6f5e72f8a9f8751133dbd5cf/2e753/top-texas-guadalupe-peak-summit.jpg 1152w","/static/87a2442c6f5e72f8a9f8751133dbd5cf/74f4b/top-texas-guadalupe-peak-summit.jpg 1728w","/static/87a2442c6f5e72f8a9f8751133dbd5cf/de5bb/top-texas-guadalupe-peak-summit.jpg 2304w","/static/87a2442c6f5e72f8a9f8751133dbd5cf/84eb2/top-texas-guadalupe-peak-summit.jpg 2400w"],sizes:"(max-width: 1152px) 100vw, 1152px",style:{width:"100%",height:"100%",margin:"0",verticalAlign:"middle",position:"absolute",top:"0",left:"0"},loading:"lazy"}),"\n    "),Object(n.b)(d,{mdxType:"Caption"},"The summit of the Guadalupe Peak Trail. Photo by Brandon Jakobeit."),Object(n.b)(b,{mdxType:"Row"},Object(n.b)(p,{colSm:12,colMd:4,colLg:6,mdxType:"Column"},Object(n.b)("p",null,"Conquering Guadalupe Peak, the state’s highest mountain, is an impressive feat for any hiker. The trail to the top features steep switchbacks, false summits, and 3,000 feet of elevation gain. For those who reach the peak, the feeling of pride is unmistakable. In July 1982, a group of men in wheelchairs accomplished the task, a show of strength that helped redefine how people with disabilities interact with the outdoors. "),Object(n.b)("p",null,"The group began its expedition with six people, all members of Turning POINT (Paraplegics on Independent Nature Trips), a Dallas-based organization that continues to empower people with disabilities to participate in outdoor recreation. The men weren’t doing it just for themselves; they were also raising funds for the West Texas Rehabilitation Center in Abilene. Against the wishes of park officials, who recommended they take a less strenuous route to a less iconic destination, the group opted to spend five days on the 4-mile route leading to Guadalupe Peak."),Object(n.b)("p",null,"Challenges plagued them from the outset. One man fell ill before they started, and two others made it up partway but had to turn back due to other complications. That left Donny Rodgers, Joe Moss, and Dave Kiley. Their creative problem-solving was essential to their success; the trio formed makeshift ramps up the trail by rearranging rocks to create a slope. As they reached the final few hundred yards, the trail became steeper, and the men, accompanied by a park ranger, exited their wheelchairs and crawled the remaining distance up to the monument that tops the peak. They made it; they had reached the top of Texas."),Object(n.b)("p",null,"Due to the sharp-descending trails, officials deemed it unsafe to make the journey back down. So, after the group spent a night on the mountain, the U.S. Army sent helicopters from Fort Bliss to pick them up. The trio was delivered to the ground for a press conference, where President Ronald Reagan and the Texas and New Mexico governors called to congratulate them."),Object(n.b)("p",null,"Today, there are many more opportunities for people in wheelchairs to experience the outdoors without having to complete such a daring endeavor. Sandra Heath, the Americans with Disabilities Act Coordinator for the Texas Parks and Wildlife Department, leads the charge to make Texas’ state and local parks more accessible. She recommends calling ahead to ask about a park’s specific offerings, since they vary by location and could be affected by weather conditions. “If we don’t have something in place, we’ll try to make something happen,” Heath says."),Object(n.b)("p",null,"Some of the unique offerings from TPWD are guided hunting trips for people who are blind or visually impaired; guided American Sign Language hikes through parks like Dinosaur Valley State Park; and, in some parks, free use of an all-terrain wheelchair. For more information, visit ",Object(n.b)("a",{parentName:"p",href:"https://tpwd.texas.gov/state-parks/park-information/accessibility"},"TPWD"),".")),Object(n.b)(p,{colSm:12,colMd:4,colLg:6,mdxType:"Column"},Object(n.b)("span",{className:"gatsby-resp-image-wrapper",style:{position:"relative",display:"block",marginLeft:"auto",marginRight:"auto",maxWidth:"1152px"}},"\n      ",Object(n.b)("span",{parentName:"span",className:"gatsby-resp-image-background-image",style:{paddingBottom:"129.86111111111111%",position:"relative",bottom:"0",left:"0",backgroundImage:"url('data:image/jpeg;base64,/9j/2wBDABALDA4MChAODQ4SERATGCgaGBYWGDEjJR0oOjM9PDkzODdASFxOQERXRTc4UG1RV19iZ2hnPk1xeXBkeFxlZ2P/2wBDARESEhgVGC8aGi9jQjhCY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2P/wgARCAAaABQDASIAAhEBAxEB/8QAGQAAAgMBAAAAAAAAAAAAAAAAAAQBAwUC/8QAFgEBAQEAAAAAAAAAAAAAAAAAAQAC/9oADAMBAAIQAxAAAAHuM8y6pjiUWLSLAsV//8QAHRAAAgEEAwAAAAAAAAAAAAAAAAECAxASIRETQf/aAAgBAQABBQLspoVSDFixYkpazYnrnVvD/8QAFxEAAwEAAAAAAAAAAAAAAAAAAAESEP/aAAgBAwEBPwGEQt//xAAXEQADAQAAAAAAAAAAAAAAAAAAAhIQ/9oACAECAQE/AbYtt//EABsQAAICAwEAAAAAAAAAAAAAAAAxARECICFR/9oACAEBAAY/AuXJ4OBorEe//8QAHxABAAIBAwUAAAAAAAAAAAAAAQARIRAxUUFhgaHB/9oACAEBAAE/IX5JvLO7R2lKyWIVWKqZtvmCBkVxKS8e5kK6wbMpoaP/2gAMAwEAAgADAAAAEFTsvv/EABgRAAIDAAAAAAAAAAAAAAAAAAABEBEh/9oACAEDAQE/EMYUyz//xAAYEQACAwAAAAAAAAAAAAAAAAAAARARIf/aAAgBAgEBPxDaBoo//8QAHhABAQACAgMBAQAAAAAAAAAAAREAITFRQWGBkdH/2gAIAQEAAT8QIVbISD9ZpC4o39wHcH3MoYwg8vZhogrJ4+dPOQqBPZ7xUB2k/rBv43V4MgNHwwWpddYnS6rle3P/2Q==')",backgroundSize:"cover",display:"block"}}),"\n  ",Object(n.b)("img",{parentName:"span",className:"gatsby-resp-image-image",alt:"A large, rocky mountain glows in the sunlight ",title:"A large, rocky mountain glows in the sunlight ",src:"/static/d73d7a1a0899303e25bfa30214db104a/2e753/guadalupe-peak-sun-glow.jpg",srcSet:["/static/d73d7a1a0899303e25bfa30214db104a/69549/guadalupe-peak-sun-glow.jpg 288w","/static/d73d7a1a0899303e25bfa30214db104a/473e3/guadalupe-peak-sun-glow.jpg 576w","/static/d73d7a1a0899303e25bfa30214db104a/2e753/guadalupe-peak-sun-glow.jpg 1152w","/static/d73d7a1a0899303e25bfa30214db104a/040c5/guadalupe-peak-sun-glow.jpg 1200w"],sizes:"(max-width: 1152px) 100vw, 1152px",style:{width:"100%",height:"100%",margin:"0",verticalAlign:"middle",position:"absolute",top:"0",left:"0"},loading:"lazy"}),"\n    "),Object(n.b)(d,{mdxType:"Caption"},"The Guadalupe Peak Trail in Guadalupe Mountains National Park. Photo by Brandon Jakobeit."))),Object(n.b)(b,{mdxType:"Row"},Object(n.b)(p,{colSm:12,colMd:5,colLg:8,mdxType:"Column"},Object(n.b)("span",{className:"gatsby-resp-image-wrapper",style:{position:"relative",display:"block",marginLeft:"auto",marginRight:"auto",maxWidth:"1152px"}},"\n      ",Object(n.b)("span",{parentName:"span",className:"gatsby-resp-image-background-image",style:{paddingBottom:"66.66666666666666%",position:"relative",bottom:"0",left:"0",backgroundImage:"url('data:image/jpeg;base64,/9j/2wBDABALDA4MChAODQ4SERATGCgaGBYWGDEjJR0oOjM9PDkzODdASFxOQERXRTc4UG1RV19iZ2hnPk1xeXBkeFxlZ2P/2wBDARESEhgVGC8aGi9jQjhCY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2P/wgARCAANABQDASIAAhEBAxEB/8QAFwABAQEBAAAAAAAAAAAAAAAAAAQCA//EABYBAQEBAAAAAAAAAAAAAAAAAAIAAf/aAAwDAQACEAMQAAAB4VwgtpWX/8QAGhAAAgMBAQAAAAAAAAAAAAAAAgMBEiITMv/aAAgBAQABBQICqVxZLY2mOheWMLX/xAAWEQADAAAAAAAAAAAAAAAAAAAQESH/2gAIAQMBAT8BdH//xAAWEQEBAQAAAAAAAAAAAAAAAAAAESH/2gAIAQIBAT8BmI//xAAYEAEAAwEAAAAAAAAAAAAAAAABABAhQf/aAAgBAQAGPwIScJlNf//EABoQAAMBAAMAAAAAAAAAAAAAAAABESExUZH/2gAIAQEAAT8ha81zcEwch0K5FIZtkN210b4P/9oADAMBAAIAAwAAABAH/wD/xAAWEQEBAQAAAAAAAAAAAAAAAAAAARH/2gAIAQMBAT8Qo2P/xAAVEQEBAAAAAAAAAAAAAAAAAAAAEf/aAAgBAgEBPxCin//EABkQAQEBAQEBAAAAAAAAAAAAAAERADFRQf/aAAgBAQABPxA0NAGhH45RMMjhZ57rahfDcxOZ8tzZ7AslbLn2hxwm/9k=')",backgroundSize:"cover",display:"block"}}),"\n  ",Object(n.b)("img",{parentName:"span",className:"gatsby-resp-image-image",alt:"A visitor and park staff look through binoculars in a wooden wildlife viewing area in a state park",title:"A visitor and park staff look through binoculars in a wooden wildlife viewing area in a state park",src:"/static/4e2bd089596078e4c16ccffb6dd611f0/2e753/bentsen-rio-grande-valley-sp.jpg",srcSet:["/static/4e2bd089596078e4c16ccffb6dd611f0/69549/bentsen-rio-grande-valley-sp.jpg 288w","/static/4e2bd089596078e4c16ccffb6dd611f0/473e3/bentsen-rio-grande-valley-sp.jpg 576w","/static/4e2bd089596078e4c16ccffb6dd611f0/2e753/bentsen-rio-grande-valley-sp.jpg 1152w","/static/4e2bd089596078e4c16ccffb6dd611f0/74f4b/bentsen-rio-grande-valley-sp.jpg 1728w","/static/4e2bd089596078e4c16ccffb6dd611f0/de5bb/bentsen-rio-grande-valley-sp.jpg 2304w","/static/4e2bd089596078e4c16ccffb6dd611f0/84eb2/bentsen-rio-grande-valley-sp.jpg 2400w"],sizes:"(max-width: 1152px) 100vw, 1152px",style:{width:"100%",height:"100%",margin:"0",verticalAlign:"middle",position:"absolute",top:"0",left:"0"},loading:"lazy"}),"\n    "),Object(n.b)(d,{mdxType:"Caption"},"Bentsen-Rio Grande Valley State Park. Photo by Larry Ditto."),Object(n.b)("h3",null,"Fishing"),Object(n.b)("p",null,"Fishing enthusiasts should try out Caddo Lake State Park in far East Texas. The park includes an interpretive trail and a wheelchair-accessible fishing pier. There are also campsites and two cabins that are wheelchair accessible. Two of the piers at Inks Lake State Park can be navigated in a wheelchair, and the 400-foot-long pier at Lake Corpus Christi State Park has a concrete path, with ample lighting and a railing. Brazos Bend State Park near Galveston is also good for fishing and has a wheelchair-accessible trail out to its fishing pier, while cement paths lead to some of the piers at Huntsville State Park and Lake Livingston State Park. For more fishing recommendations, call the park you’re planning to visit."),Object(n.b)("h3",null,"Wildlife Viewing"),Object(n.b)("p",null,"Several parks in the Rio Grande Valley have paved areas and offer views of birds, flora, and fauna not found anywhere else in Texas. Estero Llano Grande State Park has an all-terrain wheelchair for easier access to its sites, but normal wheelchairs can traverse many of its trails, especially to the Indigo Nature Blind. The park is part of the World Birding Center, a collection of nine prime birding areas within the Rio Grande Valley. This also includes Resaca de la Palma State Park, which has accessible trails, tram tours, and a visitor center. Bentsen-Rio Grande Valley State Park’s Hawk Observation Tower has a ramp, and accompanying photo blinds and interpretive trail are ADA certified and wheelchair accessible."),Object(n.b)("p",null,"Farther from the Valley, Brazos Bend State Park’s “Habitats and Niches” permanent exhibit offers a look at the area’s famed alligators, and its wheelchair-\naccessible half-mile wetland nature trail is dotted with tactile bronze versions of the wetland animals normally seen in the park. Wetland and woodland habitats are on full display from Lake Livingston State Park’s .9-mile boardwalk through the Piney Woods. And those with an interest in bats can visit Kickapoo Cavern State Park from mid-March to October and watch from the accessible viewing platform as up to a million Mexican free-tailed bats emerge from the cavern."),Object(n.b)("h3",null,"Camping"),Object(n.b)("p",null,"Many state and national parks offer camping accommodations and accessible campsites. At Kickapoo Cavern, Lake Corpus Christi, and Inks Lake State Park, a few of the campsites are connected directly to the parking lot and bathrooms via cement pathways. Paved trails from the parking lot to the campsites are also available at Lake Mineral Wells State Park and Trailway, Ray Roberts Lake State Park, Brazos Bend State Park, Huntsville State Park, and other parks."),Object(n.b)("p",null,"For those who don’t want to pitch a tent, some parks have cabins, lodges, and shelters. Inks Lake and Lake Corpus Christi have wheelchair-accessible cabins, Abilene State Park has a wheelchair-accessible yurt, and Huntsville State Park has three wheelchair-accessible screened shelters with electrical outlets. Some screened shelters at state parks are not wide enough to be ADA compliant for wheelchairs to enter; it’s always a good idea to check before visiting."),Object(n.b)("h3",null,"Hiking"),Object(n.b)("p",null,"Ray Roberts Lake State Park north of Dallas has a 2.8-mile accessible scenic trail through much of the park, and there are 4.5 miles of additional paved trails that are considered mostly accessible. Lake Mineral Wells State Park & Trailway has a 2-mile stretch of asphalt trail through downtown Mineral Wells, along with 18 miles of crushed limestone that are suitable for wheelchairs. And Government Canyon State Natural Area’s Discovery Trail is made up of packed granite and areas of boardwalk; just park at the visitor center and follow the sidewalk to the trailhead.  ")),Object(n.b)(p,{colSm:12,colMd:2,colLg:4,mdxType:"Column"},Object(n.b)("h4",null,"Navigating National Parks"),Object(n.b)("p",null,"• The Pinery Trail at Guadalupe Mountains National Park leads to historic ruins of an 1800s stagecoach, and the Manzanita Spring Trail leads to the spring through an orchard. Both are paved and less than one mile."),Object(n.b)("p",null,"• Big Bend National Park has accessible campsites, nature trails, and programs like nature walks and shows in the amphitheater. "),Object(n.b)("p",null,"• A majority of the facilities at Lyndon B. Johnson National Historic Park are wheelchair accessible, and a narrower wheelchair is available upon request for those who want to participate in the Texas White House tour."),Object(n.b)("p",null,"• The entire Waco Mammoth facility is negotiable by wheelchair."),Object(n.b)("p",null,"• At Padre Island National Seashore, five specialized beach wheelchairs are available for free to use. "),Object(n.b)("p",null,"For more information on accessibility at national parks, visit ",Object(n.b)("a",{parentName:"p",href:"https://nps.gov/aboutus/accessibility.htm"},"https://nps.gov/aboutus/accessibility.htm"),". "),Object(n.b)("h4",null,"Other State Parks with Accessible Features"),Object(n.b)("ul",null,Object(n.b)("li",{parentName:"ul"},"Bastrop State Park"),Object(n.b)("li",{parentName:"ul"},"Big Spring State Park"),Object(n.b)("li",{parentName:"ul"},"Caprock Canyons State Park"),Object(n.b)("li",{parentName:"ul"},"Cedar Hill State Park"),Object(n.b)("li",{parentName:"ul"},"Choke Canyon State Park"),Object(n.b)("li",{parentName:"ul"},"Eisenhower State Park"),Object(n.b)("li",{parentName:"ul"},"Fairfield Lake State Park"),Object(n.b)("li",{parentName:"ul"},"Falcon State Park"),Object(n.b)("li",{parentName:"ul"},"Fort Parker State Park"),Object(n.b)("li",{parentName:"ul"},"Goliad State Park and Historic Site"),Object(n.b)("li",{parentName:"ul"},"Lake Arrowhead State Park"),Object(n.b)("li",{parentName:"ul"},"Lake Brownwood State Park"),Object(n.b)("li",{parentName:"ul"},"Lake Colorado City State Park"),Object(n.b)("li",{parentName:"ul"},"Lost Maples State Natural Area"),Object(n.b)("li",{parentName:"ul"},"Lyndon B. Johnson State Park"),Object(n.b)("li",{parentName:"ul"},"Martin Creek Lake State Park"),Object(n.b)("li",{parentName:"ul"},"Meridian State Park"),Object(n.b)("li",{parentName:"ul"},"Monahans Sandhills State Park"),Object(n.b)("li",{parentName:"ul"},"Pedernales Falls State Park"),Object(n.b)("li",{parentName:"ul"},"Possum Kingdom State Park"),Object(n.b)("li",{parentName:"ul"},"Sea Rim State Park")))),Object(n.b)(b,{mdxType:"Row"},Object(n.b)(p,{colSm:3,colMd:3,colLg:5,mdxType:"Column"})))}m.isMDXComponent=!0}}]);
//# sourceMappingURL=component---src-pages-road-trips-top-of-texas-mdx-7ce45a78d97f956f098d.js.map