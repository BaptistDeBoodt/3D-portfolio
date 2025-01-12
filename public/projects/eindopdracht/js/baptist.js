console.log("baptist.js");
function baptist(fase) {
    console.log("baptist.js: fase = " + fase);

    let section = document.getElementById("baptist");

    if ( ! section.init ) {
        section.init = true;
        //EIGEN ANIMATIE SCHRIJVEN
        console.log("baptist.js: init");
        section.tl

                // MAIN BOXES
                .to("#baptist .box", {
                    opacity: 1,
                    backgroundColor: "#d792ff",
                    left: "25vw",
                    top: "40vh",
                    width: "4vw",
                    height: "4vw",
                    duration: 7
                })
        
                .add ('blue')
                .to("#baptist .box", {
                        opacity: 1,
                        backgroundColor: "#2b6cb4",
                        left: "25vw",
                        top: "40vh",
                        width: "4vw",
                        height: "4vw",
                        duration: 1
                })
                .to("#baptist .box .part-1" , {
                    opacity: 1,
                    backgroundColor: "#2b6cb4",
                    left: "100%",
                    top: "0",
                }, 'blue')
        
                .to("#baptist .box .part-2" , {
                    opacity: 1,
                    backgroundColor: "#2b6cb4",
                    left: "200%",
                    top: "0",
                },'blue')
        
                .to("#baptist .box .part-3" , {
                    opacity: 1,
                    backgroundColor: "#2b6cb4",
                    left: "0%",
                    top: "-100%",
                },'blue')
                .add ('blue')
                .to("#baptist .box", {
                        opacity: 1,
                        backgroundColor: "#2b6cb4",
                        left: "60vw",
                        top: "40vh",
                        width: "4vw",
                        height: "4vw",
                        duration: 5
                })

                .add ('first')
                .to("#baptist .first-block", {
                        opacity: 1,
                        backgroundColor: "#2b6cb4",
                        left: "4vw",
                        bottom: "0vh",
                        width: "4vw",
                        height: "4vw",
                        duration: 1
                })
                .to("#baptist .first-block .part-a" , {
                    opacity: 1,
                    backgroundColor: "#2b6cb4",
                    left: "100%",
                    top: "0",
                }, 'first')

                .to("#baptist .first-block .part-b" , {
                    opacity: 1,
                    backgroundColor: "#2b6cb4",
                    left: "200%",
                    top: "0",
                },'first')

                .to("#baptist .first-block .part-c" , {
                    opacity: 1,
                    backgroundColor: "#2b6cb4",
                    left: "0%",
                    top: "-100%",
                },'first')

                .add ('fifth')
                .to("#baptist .fifth-block", {
                        opacity: 1,
                        backgroundColor: "yellow",
                        left: "40vw",
                        bottom: "0%",
                        width: "4vw",
                        height: "4vw",
                        duration: 1
                })
                .to("#baptist .fifth-block .part-a" , {
                    opacity: 1,
                    backgroundColor: "yellow",
                    left: "0%",
                    top: "-100%",
                }, 'fifth')
        
                .to("#baptist .fifth-block .part-b" , {
                    opacity: 1,
                    backgroundColor: "yellow",
                    left: "100%",
                    top: "0%",
                },'fifth')
        
                .to("#baptist .fifth-block .part-c" , {
                    opacity: 1,
                    backgroundColor: "yellow",
                    left: "100%",
                    top: "-100%",
                },'fifth')
        
                .add ('purple')
                .to("#baptist .box", {
                    opacity: 1,
                    backgroundColor: "purple",
                    left: "60vw",
                    top: "40vh",
                    width: "4vw",
                    height: "4vw",
                    duration: 1
                })
                .to("#baptist .box .part-1" , {
                    opacity: 1,
                    backgroundColor: "purple",
                    left: "100%",
                    top: "0",
                }, 'purple')
        
                .to("#baptist .box .part-2" , {
                    opacity: 1,
                    backgroundColor: "purple",
                    left: "200%",
                    top: "0",
                },'purple')
        
                .to("#baptist .box .part-3" , {
                    opacity: 1,
                    backgroundColor: "purple",
                    left: "100%",
                    top: "-100%",
                },'purple')
        
                .to("#baptist .box", {
                    opacity: 1,
                    backgroundColor: "purple",
                    left: "25vw",
                    top: "40vh",
                    width: "4vw",
                    height: "4vw",
                    duration: 5
                })

                .add ('eighth')
                .to("#baptist .eighth-block", {
                    opacity: 1,
                    backgroundColor: "purple",
                    left: "52vw",
                    bottom: "0vh",
                    width: "4vw",
                    height: "4vw",
                    duration: 1
                })
                .to("#baptist .eighth-block .part-a" , {
                    opacity: 1,
                    backgroundColor: "purple",
                    left: "100%",
                    top: "0",
                }, 'eighth')

                .to("#baptist .eighth-block .part-b" , {
                    opacity: 1,
                    backgroundColor: "purple",
                    left: "200%",
                    top: "0",
                },'eighth')

                .to("#baptist .eighth-block .part-c" , {
                    opacity: 1,
                    backgroundColor: "purple",
                    left: "100%",
                    top: "-100%",
                },'eighth')

                .add ('thirteenth')
                .to("#baptist .thirteenth-block", {
                        opacity: 1,
                        backgroundColor: "#2b6cb4",
                        left: "84vw",
                        bottom: "0vh",
                        width: "4vw",
                        height: "4vw",
                        duration: 1
                })
                .to("#baptist .thirteenth-block .part-a" , {
                    opacity: 1,
                    backgroundColor: "#2b6cb4",
                    left: "100%",
                    top: "0",
                }, 'thirteenth')
        
                .to("#baptist .thirteenth-block .part-b" , {
                    opacity: 1,
                    backgroundColor: "#2b6cb4",
                    left: "200%",
                    top: "0",
                },'thirteenth')
        
                .to("#baptist .thirteenth-block .part-c" , {
                    opacity: 1,
                    backgroundColor: "#2b6cb4",
                    left: "0%",
                    top: "-100%",
                },'thirteenth')

        
                .add ('orange')
                .to("#baptist .box", {
                    opacity: 1,
                    backgroundColor: "orange",
                    left: "25vw",
                    top: "40vh",
                    width: "4vw",
                    height: "4vw",
                })
                .to("#baptist .box .part-1" , {
                    opacity: 1,
                    backgroundColor: "orange",
                    left: "100%",
                    top: "0",
                }, 'orange')
        
                .to("#baptist .box .part-2" , {
                    opacity: 1,
                    backgroundColor: "orange",
                    left: "200%",
                    top: "0",
                },'orange')
        
                .to("#baptist .box .part-3" , {
                    opacity: 1,
                    backgroundColor: "orange",
                    left: "200%",
                    top: "-100%",
                },'orange')
        
                .to("#baptist .box", {
                    opacity: 1,
                    backgroundColor: "orange",
                    left: "50vw",
                    top: "40vh",
                    width: "4vw",
                    height: "4vw",
                    duration: 5
                })

                .add ('fourth')
                .to("#baptist .fourth-block", {
                        opacity: 1,
                        backgroundColor: "#2b6cb4",
                        left: "32vw",
                        bottom: "0vh",
                        width: "4vw",
                        height: "4vw",
                        duration: 1
                })
                .to("#baptist .fourth-block .part-a" , {
                    opacity: 1,
                    backgroundColor: "#2b6cb4",
                    left: "100%",
                    top: "0%",
                }, 'fourth')
        
                .to("#baptist .fourth-block .part-b" , {
                    opacity: 1,
                    backgroundColor: "#2b6cb4",
                    left: "100%",
                    top: "-100%",
                },'fourth')
        
                .to("#baptist .fourth-block .part-c" , {
                    opacity: 1,
                    backgroundColor: "#2b6cb4",
                    left: "100%",
                    top: "-200%",
                },'fourth')

                .add ('sixth')
                .to("#baptist .sixth-block", {
                        opacity: 1,
                        backgroundColor: "#50af3a",
                        left: "24vw",
                        bottom: "0vh",
                        width: "4vw",
                        height: "4vw",
                        duration: 1
                })
                .to("#baptist .sixth-block .part-a" , {
                    opacity: 1,
                    backgroundColor: "#50af3a",
                    left: "100%",
                    top: "0%",
                }, 'sixth')
        
                .to("#baptist .sixth-block .part-b" , {
                    opacity: 1,
                    backgroundColor: "#50af3a",
                    left: "100%",
                    top: "-100%",
                },'sixth')
        
                .to("#baptist .sixth-block .part-c" , {
                    opacity: 1,
                    backgroundColor: "#50af3a",
                    left: "200%",
                    top: "-100%",
                },'sixth')
        
                .add ('aqua')
                .to("#baptist .box", {
                    opacity: 1,
                    backgroundColor: "aqua",
                    left: "60vw",
                    top: "40vh",
                    width: "4vw",
                    height: "4vw",
                })
                .to("#baptist .box .part-1" , {
                    opacity: 1,
                    backgroundColor: "aqua",
                    left: "100%",
                    top: "0",
                }, 'aqua')
        
                .to("#baptist .box .part-2" , {
                    opacity: 1,
                    backgroundColor: "aqua",
                    left: "200%",
                    top: "0",
                },'aqua')
        
                .to("#baptist .box .part-3" , {
                    opacity: 1,
                    backgroundColor: "aqua",
                    left: "300%",
                    top: "0%",
                },'aqua')
        
                .to("#baptist .box", {
                    opacity: 1,
                    backgroundColor: "aqua",
                    left: "25vw",
                    top: "40vh",
                    width: "4vw",
                    height: "4vw",
                    duration: 5
                })

                .add ('seventh')
                .to("#baptist .seventh-block", {
                        opacity: 1,
                        backgroundColor: "red",
                        left: "48vw",
                        bottom: "0%",
                        width: "4vw",
                        height: "4vw",
                        duration: 1
                })
                .to("#baptist .seventh-block .part-a" , {
                    opacity: 1,
                    backgroundColor: "red",
                    left: "0%",
                    top: "-100%",
                }, 'seventh')

                .to("#baptist .seventh-block .part-b" , {
                    opacity: 1,
                    backgroundColor: "red",
                    left: "100%",
                    top: "-200%",
                },'seventh')

                .to("#baptist .seventh-block .part-c" , {
                    opacity: 1,
                    backgroundColor: "red",
                    left: "100%",
                    top: "-100%",
                },'seventh')

                .add ('third')
                .to("#baptist .third-block", {
                        opacity: 1,
                        backgroundColor: "purple",
                        left: "20vw",
                        bottom: "0vh",
                        width: "4vw",
                        height: "4vw",
                        duration: 1
                })
                .to("#baptist .third-block .part-a" , {
                    opacity: 1,
                    backgroundColor: "purple",
                    left: "100%",
                    top: "-100%",
                }, 'third')

                .to("#baptist .third-block .part-b" , {
                    opacity: 1,
                    backgroundColor: "purple",
                    left: "0%",
                    top: "-200%",
                },'third')

                .to("#baptist .third-block .part-c" , {
                    opacity: 1,
                    backgroundColor: "purple",
                    left: "0%",
                    top: "-100%",
                },'third')
        
                .add ('green')
                .to("#baptist .box", {
                    opacity: 1,
                    backgroundColor: "#50af3a",
                    left: "25vw",
                    top: "40vh",
                    width: "4vw",
                    height: "4vw",
                })
                .to("#baptist .box .part-1" , {
                    opacity: 1,
                    backgroundColor: "#50af3a",
                    left: "100%",
                    top: "0",
                }, 'green')
        
                .to("#baptist .box .part-2" , {
                    opacity: 1,
                    backgroundColor: "#50af3a",
                    left: "100%",
                    top: "-100%",
                },'green')
        
                .to("#baptist .box .part-3" , {
                    opacity: 1,
                    backgroundColor: "#50af3a",
                    left: "200%",
                    top: "-100%",
                },'green')
        
                .to("#baptist .box", {
                    opacity: 1,
                    backgroundColor: "#50af3a",
                    left: "60vw",
                    top: "40vh",
                    width: "4vw",
                    height: "4vw",
                    duration: 5
                })

                .add ('eleventh')
                .to("#baptist .eleventh-block", {
                        opacity: 1,
                        backgroundColor: "yellow",
                        left: "72vw",
                        bottom: "0%",
                        width: "4vw",
                        height: "4vw",
                        duration: 1
                })
                .to("#baptist .eleventh-block .part-a" , {
                    opacity: 1,
                    backgroundColor: "yellow",
                    left: "0%",
                    top: "-100%",
                }, 'eleventh')

                .to("#baptist .eleventh-block .part-b" , {
                    opacity: 1,
                    backgroundColor: "yellow",
                    left: "100%",
                    top: "0%",
                },'eleventh')

                .to("#baptist .eleventh-block .part-c" , {
                    opacity: 1,
                    backgroundColor: "yellow",
                    left: "100%",
                    top: "-100%",
                },'eleventh')

                .add ('second')
                .to("#baptist .second-block", {
                        opacity: 1,
                        backgroundColor: "#2b6cb4",
                        left: "16vw",
                        bottom: "0vh",
                        width: "4vw",
                        height: "4vw",
                        duration: 1
                })
                .to("#baptist .second-block .part-a" , {
                    opacity: 1,
                    backgroundColor: "#2b6cb4",
                    left: "-100%",
                    top: "-100%",
                }, 'second')

                .to("#baptist .second-block .part-b" , {
                    opacity: 1,
                    backgroundColor: "#2b6cb4",
                    left: "-200%",
                    top: "-100%",
                },'second')

                .to("#baptist .second-block .part-c" , {
                    opacity: 1,
                    backgroundColor: "#2b6cb4",
                    left: "0%",
                    top: "-100%",
                },'second')

                .add ('yellow')
                .to("#baptist .box", {
                    opacity: 1,
                    backgroundColor: "yellow",
                    left: "60vw",
                    top: "40vh",
                    width: "4vw",
                    height: "4vw",
                })
                .to("#baptist .box .part-1" , {
                    opacity: 1,
                    backgroundColor: "yellow",
                    left: "100%",
                    top: "0",
                }, 'yellow')
        
                .to("#baptist .box .part-2" , {
                    opacity: 1,
                    backgroundColor: "yellow",
                    left: "0",
                    top: "-100%",
                },'yellow')
        
                .to("#baptist .box .part-3" , {
                    opacity: 1,
                    backgroundColor: "yellow",
                    left: "100%",
                    top: "-100%",
                },'yellow')
        
                .to("#baptist .box", {
                    opacity: 1,
                    backgroundColor: "yellow",
                    left: "25vw",
                    top: "40vh",
                    width: "4vw",
                    height: "4vw",
                    duration: 5
                })

                .add ('twelfth')
                .to("#baptist .twelfth-block", {
                    opacity: 1,
                    backgroundColor: "orange",
                    left: "80vw",
                    bottom: "0vh",
                    width: "4vw",
                    height: "4vw",
                    duration: 1
                })
                .to("#baptist .twelfth-block .part-a" , {
                    opacity: 1,
                    backgroundColor: "orange",
                    left: "-100%",
                    top: "-200%",
                }, 'twelfth')
        
                .to("#baptist .twelfth-block .part-b" , {
                    opacity: 1,
                    backgroundColor: "orange",
                    left: "0%",
                    top: "-200%",
                },'twelfth')
        
                .to("#baptist .twelfth-block .part-c" , {
                    opacity: 1,
                    backgroundColor: "orange",
                    left: "0%",
                    top: "-100%",
                },'twelfth')

                
                .add ('ninth')
                .to("#baptist .ninth-block", {
                    opacity: 1,
                    backgroundColor: "#50af3a",
                    left: "64vw",
                    bottom: "0vh",
                    width: "4vw",
                    height: "4vw",
                    duration: 1
                })
                .to("#baptist .ninth-block .part-a" , {
                    opacity: 1,
                    backgroundColor: "#50af3a",
                    left: "-100%",
                    top: "-200%",
                }, 'ninth')

                .to("#baptist .ninth-block .part-b" , {
                    opacity: 1,
                    backgroundColor: "#50af3a",
                    left: "-100%",
                    top: "-100%",
                },'ninth')

                .to("#baptist .ninth-block .part-c" , {
                    opacity: 1,
                    backgroundColor: "#50af3a",
                    left: "0%",
                    top: "-100%",
                },'ninth')
        
                .add ('red')
                .to("#baptist .box", {
                    opacity: 1,
                    backgroundColor: "red",
                    left: "25vw",
                    top: "40vh",
                    width: "4vw",
                    height: "4vw",
                })
                .to("#baptist .box .part-1" , {
                    opacity: 1,
                    backgroundColor: "red",
                    left: "100%",
                    top: "0",
                }, 'red')
        
                .to("#baptist .box .part-2" , {
                    opacity: 1,
                    backgroundColor: "red",
                    left: "-100%",
                    top: "-100%",
                },'red')
        
                .to("#baptist .box .part-3" , {
                    opacity: 1,
                    backgroundColor: "red",
                    left: "0",
                    top: "-100%",
                },'red')

                .add ('tenth')
                .to("#baptist .tenth-block", {
                    opacity: 1,
                    backgroundColor: "orange",
                    left: "68vw",
                    bottom: "0vh",
                    width: "4vw",
                    height: "4vw",
                    duration: 1
                })
                .to("#baptist .tenth-block .part-a" , {
                    opacity: 1,
                    backgroundColor: "orange",
                    left: "-100%",
                    top: "-200%",
                }, 'tenth')
        
                .to("#baptist .tenth-block .part-b" , {
                    opacity: 1,
                    backgroundColor: "orange",
                    left: "0%",
                    top: "-200%",
                },'tenth')
        
                .to("#baptist .tenth-block .part-c" , {
                    opacity: 1,
                    backgroundColor: "orange",
                    left: "0%",
                    top: "-100%",
                },'tenth')
        
                .add ('fourteenth')
                .to("#baptist .fourteenth-block", {
                        opacity: 1,
                        backgroundColor: "#2b6cb4",
                        left: "96vw",
                        bottom: "0vh",
                        width: "4vw",
                        height: "4vw",
                        duration: 1
                })
                .to("#baptist .fourteenth-block .part-a" , {
                    opacity: 1,
                    backgroundColor: "#2b6cb4",
                    left: "-100%",
                    top: "-100%",
                }, 'fourteenth')
        
                .to("#baptist .fourteenth-block .part-b" , {
                    opacity: 1,
                    backgroundColor: "#2b6cb4",
                    left: "-200%",
                    top: "-100%",
                },'fourteenth')
        
                .to("#baptist .fourteenth-block .part-c" , {
                    opacity: 1,
                    backgroundColor: "#2b6cb4",
                    left: "0%",
                    top: "-100%",
                },'fourteenth')
        
                .to("#baptist .box", {
                    opacity: 1,
                    backgroundColor: "red",
                    left: "60vw",
                    bottom: "0vh",
                    width: "4vw",
                    height: "4vw",
                    duration: 5,
                })
        
                .add ('aqua-2')
                .to("#baptist .box", {
                    opacity: 1,
                    backgroundColor: "aqua",
                    left: "60vw",
                    top: "40vh",
                    width: "4vw",
                    height: "4vw",
                    duration: 1
                })
                .to("#baptist .box .part-1" , {
                    opacity: 1,
                    backgroundColor: "aqua",
                    left: "0",
                    top: "-100%",
                }, 'aqua-2')
        
                .to("#baptist .box .part-2" , {
                    opacity: 1,
                    backgroundColor: "aqua",
                    left: "0%",
                    top: "-200%",
                },'aqua-2')
        
                .to("#baptist .box .part-3" , {
                    opacity: 1,
                    backgroundColor: "aqua",
                    left: "0%",
                    top: "-300%",
                },'aqua-2')
        
                .to("#baptist .box", {
                    opacity: 1,
                    backgroundColor: "aqua",
                    left: "0vw",
                    top: "40vh",
                    width: "4vw",
                    height: "4vw",
                    duration: 5
                })

                .to("#baptist .box", {
                    opacity: 1,
                    backgroundColor: "aqua",
                    left: "0vw",
                    top: "92vh",
                    width: "4vw",
                    height: "4vw",
                    duration: 2
                })

                .add ('bottomline')
                .to("#baptist .first-block", {
                    opacity: 0,
                    backgroundColor: "#2b6cb4",
                    left: "4vw",
                    top: "0vh",
                    width: "4vw",
                    height: "4vw",
                    position: 'absolute',
                    duration: 5
                }, 'bottomline')

                .to("#baptist .second-block", {
                    opacity: 0,
                    backgroundColor: "#2b6cb4",
                    left: "16vw",
                    top: "0vh",
                    width: "4vw",
                    height: "4vw",
                    position: 'absolute',
                    duration: 5
                }, 'bottomline')

                .to("#baptist .third-block", {
                    opacity: 0,
                    backgroundColor: "purple",
                    left: "20vw",
                    top: "0vh",
                    width: "4vw",
                    height: "4vw",
                    duration: 5,
                    position: 'absolute',
                }, 'bottomline')

                .to("#baptist .fourth-block", {
                    opacity: 0,
                    backgroundColor: "#2b6cb4",
                    left: "32vw",
                    top: "0vh",
                    width: "4vw",
                    height: "4vw",
                    duration: 5,
                    position: 'absolute',
                }, 'bottomline')

                .to("#baptist .fifth-block", {
                    opacity: 0,
                    backgroundColor: "yellow",
                    left: "40vw",
                    top: "0vh",
                    width: "4vw",
                    height: "4vw",
                    duration: 5,
                    position: 'absolute'
                }, 'bottomline')

                .to("#baptist .sixth-block", {
                    opacity: 0,
                    backgroundColor: "#50af3a",
                    left: "24vw",
                    top: "0vh",
                    width: "4vw",
                    height: "4vw",
                    duration: 5,
                    position: 'absolute'
                }, 'bottomline')

                .to("#baptist .seventh-block", {
                    opacity: 0,
                    backgroundColor: "red",
                    left: "48vw",
                    top: "0vh",
                    width: "4vw",
                    height: "4vw",
                    duration: 5,
                    position: 'absolute'
                }, 'bottomline')

                .to("#baptist .eighth-block", {
                    opacity: 0,
                    backgroundColor: "purple",
                    left: "52vw",
                    top: "0vh",
                    width: "4vw",
                    height: "4vw",
                    duration: 5,
                    position: 'absolute'
                }, 'bottomline')

                .to("#baptist .ninth-block", {
                    opacity: 0,
                    backgroundColor: "#50af3a",
                    left: "64vw",
                    top: "0vh",
                    width: "4vw",
                    height: "4vw",
                    duration: 5,
                    position: 'absolute'
                }, 'bottomline')

                .to("#baptist .tenth-block", {
                    opacity: 0,
                    backgroundColor: "orange",
                    left: "68vw",
                    top: "0vh",
                    width: "4vw",
                    height: "4vw",
                    duration: 5,
                    position: 'absolute'
                }, 'bottomline')

                .to("#baptist .eleventh-block", {
                    opacity: 0,
                    backgroundColor: "yellow",
                    left: "72vw",
                    top: "0vh",
                    width: "4vw",
                    height: "4vw",
                    duration: 5,
                    position: 'absolute'
                }, 'bottomline')

                .to("#baptist .twelfth-block", {
                    opacity: 0,
                    backgroundColor: "orange",
                    left: "80vw",
                    top: "0vh",
                    width: "4vw",
                    height: "4vw",
                    duration: 5,
                    position: 'absolute'
                }, 'bottomline')

                .to("#baptist .thirteenth-block", {
                    opacity: 0,
                    backgroundColor: "#2b6cb4",
                    left: "84vw",
                    top: "0vh",
                    width: "4vw",
                    height: "4vw",
                    duration: 5,
                    position: 'absolute'
                }, 'bottomline')

                .to("#baptist .fourteenth-block", {
                    opacity: 0,
                    backgroundColor: "#2b6cb4",
                    left: "96vw",
                    top: "0vh",
                    width: "4vw",
                    height: "4vw",
                    duration: 5,
                    position: 'absolute'
                }, 'bottomline')
        
                .to("#baptist .box", {
                    opacity: 1,
                    backgroundColor: "aqua",
                    left: "48vw",
                    top: "82vh",
                    width: "4vw",
                    height: "4vw",
                    duration: 5
                }, 'bottomline')

                .add ('end')
                .to("#baptist .box", {
                    opacity: 1,
                    backgroundColor: "#33ffba",
                    left: "48vw",
                    top: "82vh",
                    width: "4vw",
                    height: "4vw",
                    border: 'none',
                    duration: 5,
                })
                .to("#baptist .box .part-1" , {
                    opacity: 0,
                }, 'end')
        
                .to("#baptist .box .part-2" , {
                    opacity: 0,
                },'end')
        
                .to("#baptist .box .part-3" , {
                    opacity: 0,
                },'end')

                .to("#baptist .box", {
                    opacity: 1,
                    backgroundColor: "#33ffba",
                    left: "48vw",
                    top: "82vh",
                    width: "4vw",
                    height: "4vw",
                    duration: 5
                })
}
}
