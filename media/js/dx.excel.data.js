
"use strict";
(function () {
    //
    var lan = apisvr.a$.selected_language,
        tbEMP, tbHED,

    masdat = {

        vi: 'eyJzZWNzIjpbeyJpZCI6MTAwMiwib2lkIjoxLCJwaWQiOi0xLCJleHBhIjp0cnVlLCJkaXMiOiJCYW4gR2nDoW0gxJHhu5FjIn0seyJpZCI6MTAwMywib2lkIjoyLCJwaWQiOjEsImV4cGEiOnRydWUsImRpcyI6IlBow7JuZyBraW5oIGRvYW5oIn0seyJpZCI6MTAwNCwib2lkIjozLCJwaWQiOjIsImV4cGEiOnRydWUsImRpcyI6IkLhu5kgcGjhuq1uIELDoW4gaMOgbmcifSx7ImlkIjoxMDA1LCJvaWQiOjQsInBpZCI6MiwiZXhwYSI6dHJ1ZSwiZGlzIjoiQuG7mSBwaOG6rW4gUXXhuqNuZyBjw6FvIn0seyJpZCI6MTAwNiwib2lkIjo1LCJwaWQiOjEsImV4cGEiOnRydWUsImRpcyI6IlBow7JuZyDEkGnhu4F1IGjDoG5oIn0seyJpZCI6MTAwNywib2lkIjo2LCJwaWQiOjQsImV4cGEiOnRydWUsImRpcyI6IkLhu5kgcGjhuq1uIFPhuqNuIHh14bqldCJ9LHsiaWQiOjEwMDgsIm9pZCI6NywicGlkIjo0LCJleHBhIjp0cnVlLCJkaXMiOiJC4buZIHBo4bqtbiBE4buLY2ggduG7pSBLaMOhY2ggaMOgbmcifSx7ImlkIjoxMDA5LCJvaWQiOjgsInBpZCI6MSwiZXhwYSI6dHJ1ZSwiZGlzIjoiUGjDsm5nIEjDoG5oIGNow61uaCJ9LHsiaWQiOjEwMTAsIm9pZCI6OSwicGlkIjo4LCJleHBhIjp0cnVlLCJkaXMiOiJC4buZIHBo4bqtbiBL4bq/IHRvw6FuIn0seyJpZCI6MTAxMSwib2lkIjoxMCwicGlkIjo5LCJleHBhIjp0cnVlLCJkaXMiOiJC4buZIHBo4bqtbiBOaMOibiBz4buxIn1dLCJwb3NzIjpbeyJpZCI6MjAwMCwiZGlzIjoiVC5QIE5ow6JuIHPhu7EifSx7ImlkIjoyMDAxLCJkaXMiOiJULlAgQ05UVCJ9LHsiaWQiOjIwMDIsImRpcyI6IlThu5VuZyBHacOhbSDEkeG7kWMifSx7ImlkIjoyMDAzLCJkaXMiOiJOaMOibiB2acOqbiJ9LHsiaWQiOjIwMDQsImRpcyI6IkcuxJAgS2luaCBkb2FuaCJ9LHsiaWQiOjEwMDUsImRpcyI6IkLhu5kgcGjhuq1uIFF14bqjbmcgY8OhbyJ9LHsiaWQiOjIwMDYsImRpcyI6Ik4uViBLaW5oIGRvYW5oIn1dLCJnZW5kZXIiOlt7ImlkIjowLCJkaXMiOiJO4buvIn0seyJpZCI6MSwiZGlzIjoiTmFtIn1dLCJtYXJyIjpbeyJpZCI6MTAsImRpcyI6IsSQ4buZYyB0aMOibiJ9LHsiaWQiOjExLCJkaXMiOiJL4bq/dCBow7RuIn0seyJpZCI6MTIsImRpcyI6Ikx5IGThu4sifSx7ImlkIjoxMywiZGlzIjoiS2jDoWMifV19'
            ,
        en: 'eyJzZWNzIjpbeyJpZCI6MTAwMiwib2lkIjoxLCJwaWQiOi0xLCJleHBhIjp0cnVlLCJkaXMiOiJCb2FyZCBvZiBEaXJlY3RvcnMifSx7ImlkIjoxMDAzLCJvaWQiOjIsInBpZCI6MSwiZXhwYSI6dHJ1ZSwiZGlzIjoiTWFya2V0aW5nIERlcGFydG1lbnQifSx7ImlkIjoxMDA0LCJvaWQiOjMsInBpZCI6MiwiZXhwYSI6dHJ1ZSwiZGlzIjoiU2FsZXMgU2VjdGlvbiJ9LHsiaWQiOjEwMDUsIm9pZCI6NCwicGlkIjoyLCJleHBhIjp0cnVlLCJkaXMiOiJBZHZlcnRpc2luZyBTZWN0aW9uIn0seyJpZCI6MTAwNiwib2lkIjo1LCJwaWQiOjEsImV4cGEiOnRydWUsImRpcyI6Ik9wZXJhdGlvbnMgRGVwYXJ0bWVudCJ9LHsiaWQiOjEwMDcsIm9pZCI6NiwicGlkIjo0LCJleHBhIjp0cnVlLCJkaXMiOiJQcm9kdWN0aW9uIFNlY3Rpb24ifSx7ImlkIjoxMDA4LCJvaWQiOjcsInBpZCI6NCwiZXhwYSI6dHJ1ZSwiZGlzIjoiQ3VzdG9tZXIgU2VydmljZSBTZWN0aW9uIn0seyJpZCI6MTAwOSwib2lkIjo4LCJwaWQiOjEsImV4cGEiOnRydWUsImRpcyI6IkFkbWluaXRyYXRpb24gRGVwYXJ0bWVudCJ9LHsiaWQiOjEwMTAsIm9pZCI6OSwicGlkIjo4LCJleHBhIjp0cnVlLCJkaXMiOiJGaW5hbmNlIFNlY3Rpb24ifSx7ImlkIjoxMDExLCJvaWQiOjEwLCJwaWQiOjksImV4cGEiOnRydWUsImRpcyI6Ikh1bWFuIFJlc291cmNlIFNlY3Rpb24ifV0sInBvc3MiOlt7ImlkIjoyMDAwLCJkaXMiOiJIUiBNYW5hZ2VyIn0seyJpZCI6MjAwMSwiZGlzIjoiSVQgTWFuYWdlciJ9LHsiaWQiOjIwMDIsImRpcyI6IkNFTyJ9LHsiaWQiOjIwMDMsImRpcyI6Ik9mZmljZXIifSx7ImlkIjoyMDA0LCJkaXMiOiJTYWxlcyBNYW5hZ2VyIn0seyJpZCI6MTAwNSwiZGlzIjoiQWR2ZXJ0aXNpbmcgU2VjdGlvbiJ9LHsiaWQiOjIwMDYsImRpcyI6IkFjY291bnQgQXNpc3RhbnQifV0sImdlbmRlciI6W3siaWQiOjAsImRpcyI6IkZlbWFsZSJ9LHsiaWQiOjEsImRpcyI6Ik1hbGUifV0sIm1hcnIiOlt7ImlkIjoxMCwiZGlzIjoiU2luZ2xlIn0seyJpZCI6MTEsImRpcyI6Ik1hcnJpZWQifSx7ImlkIjoxMiwiZGlzIjoiRGl2b3JjZSJ9LHsiaWQiOjEzLCJkaXMiOiJPdGhlciJ9XX0='
        }

    ,

    ha$UA = 'noU',

    enDAT = function (dat, coMA, m ) {
        //
        var re = [];
        //
        if (m == 1) {//decode...
            re = {};
            for (var i = 0; i < coMA.length; i++) {
                re[coMA[i]] = dat[i];
            };

        } else {

            for (var i = 0; i < coMA.length; i++) {

                re.push(dat.hasOwnProperty(coMA[i]) ? dat[coMA[i]] : 

                    m === 2? dat[coMA[i]] = null:null
                    
                    );

            };

        };
        return re;
    }
    ,

    tafy_2_jdat = function () {
        //
        //buoc phai khoi tao de co gender,marr ...
        if (!masdat.jdat) masdat.jdat = JSON.parse(masdat[lan].atou());
        //
        const test = tbHED().get(),
                    //	Select RowID as id,intinfor2 as oid,intinfor3 as pid,RptName as rpt,HeaderName as dis From Header Where Kind=1
            fi = ['id' //RowID as id
                    , 'ten' //HeaderName as dis
                    , 'rpt' //RptName as rpt
                    , 'kind'// Kind=1
                    , 'i2'//intinfor2 as oid
                    , 'i3'//intinfor3 as pid
                ]
            , as = { 'ten': 'dis', 'i2': 'oid', 'i3': 'pid' };
        //
        var sec = [], pos = [];
        for (var zi = 0; zi < test.length; zi++) {
            //
            if ([1, 2].indexOf(test[zi].kind) == -1) continue;
            //
            var rw = {};
            for (var zj = 0; zj < fi.length; zj++) {
                rw[
                    (as[fi[zj]] || fi[zj])
                ] = test[zi][fi[zj]];
            };
            //
            (rw.kind === 1 ? sec : pos).push(rw);
            //
        };
        //
        //lam 2 ngay 2 dem moi ra den day !!!
        if (sec.length > 0) masdat.jdat.secs = sec;
        if (pos.length > 0) masdat.jdat.poss = pos;
        //
    }

    ,

    jdat_2_tafy = function (d) {

        var as = { 'dis': 'ten', 'oid': 'i2', 'pid': 'i3' },
            re = {};

        for (var k in d) {

            re[ as[k] ||  k] = d[k];
        };

        return re;

    }

    ,

    IMP_RESTORE = function (mas, dume) {

        var d = $.Deferred();

        //
        //1. Update lai dbname moi nhat 
        JOB.demo.ini.dbNa = JOB.demo.conf._t.toString().hexEncode();
        //
        //
        //2. Quyet dinh save master sec,pos truoc de tao cau truc table
        fn.SAVE(mas/*rid la auto*/, {

            act: 'bulk',

            coMA: JOB.demo.ini.coHED,//header table ...

            keyPath: JOB.demo.ini.csdl[1].path,

            tenDB: JOB.demo.ini.dbNa,

            tb: JOB.demo.ini.csdl[1].tb,

            //
            createC$B: JOB.demo.c$dl
            //
            //
        }).done(function (rst) {
            //
            //save head thanh cong ---------------------------
            tbHED = TAFFY(mas);
            delete masdat.jdat;//khi restart lai thi load again
            //
            //
            JOB.api.empprofile.LuuDB(dume, 'bulk').then(function (v1) {
                //
                //***********************************************
                //*********** complete !
                tbEMP = TAFFY(dume);
                //
                //***********************************************
                //
                d.resolve();
                //
                //
            }, function (err) {
                //
                //debugger;
                d.reject({ err: err, ste: 'addemp' });
                //
            });
            //
            //
        }).fail(function (err) {

            d.reject({ err: err, ste: 'addhed' });

        });
        //
        return d.promise();
    }

    ,

    gen_ID = function () {
        return new Date().getTime();
        //elUI.db__DAT.dbHED.reduce(function (_p, _c) {
        //    if (+_c.id > +_p) {
        //        return _c.id;
        //    } else {
        //        return _p;
        //    }
        //}, 0) + 1;
    }

    , 
    
    JOB = {

        l0g:function(dat,op,cacheLOG) {
            //demo1 datbase information ...
            //
            //khi employee modify , but activilog chua load lan nao thi waite cho no load
            if (cacheLOG) JOB.demo.IMPLOGs.unshift(dat[1]);//luc nao cung o top
            //
            //
            dat = {
                '_': dat[0],
                '__': JSON.stringify(dat[1]).utoa()
            };
            //
            //
            return fn.SAVE(

                dat 

                ,

                $.extend({

                    act: 'add'

                    , mRAW: 1

                    , createC$B: function (db, na, op) {
                        //debugger;
                        const dume=JOB.demo;
                        //phai di tao toan bo databse demo 1
                        for (var z = 0; z < dume.tb.length; z++) {
                            //
                            var na = JOB.demo.ini.dbTB + dume.tb[z][0];
                            if (db.objectStoreNames.contains(na)) db.deleteObjectStore(na);
                            //
                            fn.createTB(db, na, { keyPath: dume.tb[z][1], F: dume.tb[z][2] });
                            //
                        };
                    }

                },op)

            );
        }
        ,
        api: {

            empprofile: {

                LuuDB: function (em, act) {
                    //
                    var d = $.Deferred();
                    //
                    fn.SAVE(

                            em//id la auto,
                            ,
                            {
                                act: act, coMA: JOB.demo.ini.coMA, keyPath: JOB.demo.ini.csdl[0].path, tenDB: JOB.demo.ini.dbNa, tb: JOB.demo.ini.csdl[0].tb, F: []
                                //
                                ,
                                createC$B: JOB.demo.c$dl
                                //
                                //
                            }

                    ).done(function (rst) {
                        //
                        d.resolve({ id: em.id, rowaffect: rst });
                        //
                    }).fail(function (err) {

                        d.reject(err);

                    });
                    //
                    //
                    //
                    //
                    return d.promise();
                    //
                }

                ,

                chkDUP:function(em){
                    //
                    var rst = [], dup;
                    //
                    //{"dataerr":[{"F":"acno"},{"F":"empcode"}],"kind":"DUPLICATE"}
                    if (em.acno) {
                        dup = tbEMP().filter({ acno: em.acno });
                        if (dup.count() > 0) {
                            rst.push({ "F": "acno" });
                        };
                    };
                    //
                    if (em.empcode) {
                        dup = tbEMP().filter({ empcode: { isnocase: em.empcode } });
                        if (dup.count() > 0) {
                            rst.push({ "F": "empcode" });
                        };
                    };
                    //
                    //
                    return rst;
                    //
                }
                ,

                GET: function (op) {

                    //debugger;
                    var d = $.Deferred();


                    var test = tbEMP().get();

                    d.resolve(test);

                    //$.ajax('https://jsonplaceholder.typicode.com/posts?_limit=20').done(function (res) {

                    //    d.resolve(res);

                    //}).fail(function (error) {

                    //    d.reject(error);

                    //});

                    return d.promise();

                }
                ,

                SEL: function (op) {
                    //debugger;
                    var d = $.Deferred();


                    var test = tbEMP().get();
                    //
                    var re = [];
                    for (var zi = 0; zi < test.length; zi++) {
                        var rw = {};
                        for (var zj = 0; zj < op.qry.length; zj++) {
                            rw[op.qry[zj]] = test[zi][op.qry[zj]];
                        };
                        re.push(rw);
                    };
                    //
                    //test= test.select.apply(test, op.qry);
                    //
                    d.resolve([re, JSON.stringify(JOB.demo.conf)]);

                    //$.ajax('https://jsonplaceholder.typicode.com/posts?_limit=20').done(function (res) {

                    //    d.resolve(res);

                    //}).fail(function (error) {

                    //    d.reject(error);

                    //});

                    return d.promise();
                }
                ,

                PUT: function (op) {

                    //debugger;

                    var dat = JSON.parse(op.dat),

                        upt = JSON.parse(dat.values),

                        em = tbEMP({ id: JSON.parse(dat.key).id }),

                        dup = this.chkDUP(upt);//{"dataerr":[{"F":"acno"},{"F":"empcode"}],"kind":"DUPLICATE"}

                    //
                    //
                    if (dup.length > 0) {
                        //use resolve
                        return $.Deferred().resolve({ "dataerr": dup, "kind": "DUPLICATE" });
                        //
                    } else {
                        //
                        em.update(upt);
                        //
                        //
                        if (em.context().results.length > 0) {

                            return this.LuuDB(em.first(), 'put');

                        };
                    };
                    //
                    //
                    return $.Deferred().reject({ error: 1 });
                    //
                }

                ,

                POST: function (op) {

                    //debugger;id = tbEMP().max("id") || 0,


                    var dat = JSON.parse(op.dat),

                        em = JSON.parse(dat.values),

                        dup = this.chkDUP(em);//{"dataerr":[{"F":"acno"},{"F":"empcode"}],"kind":"DUPLICATE"}

                    if (dup.length>0){
                        //use resolve
                        return $.Deferred().resolve({ "dataerr": dup, "kind": "DUPLICATE" });

                    };
                    //
                    //
                    //ad id vao new record
                    //
                    //add vo taffydb
                    tbEMP.insert(em);
                    //
                    //
                    //
                    return this.LuuDB(em, 'add');
                    //
                }

                ,

                DELETE: function (op) {

                    //debugger;

                    var dat = JSON.parse(op.dat),
                    em = tbEMP({ id: dat.id }).remove();
                    //
                    if (em > 0) {

                        return this.LuuDB({ id: dat.id }, 'delete');

                    };
                    //
                    //
                    return $.Deferred().resolve(0);
                }

                ,

                IMPORT: function (op) {
                    //
                    var d = $.Deferred(), th$ = this,

                      dume = JOB.demo
                      ,

                      mas = dume.tb[0] //quy uoc table demo0 = log user import profile 

                      ,

                      Ste_IMP = function (rst) {
                          //
                          //
                          //
                          dume = JSON.parse(op.dat);
                          mas = [];
                          //
                          //debugger;
                          if (op.mas) {
                              JSON.parse(op.mas).forEach(function (m) {
                                  for (var i = 1; i < m.length; i++) {
                                      mas.push({
                                          id: i, kind: m[0], ten: m[i], rpt: 'imp_' + m[0] + '_' + i, isdef: 0
                                            , i2:i //intinfor2 as oid
                                            , i3:-1//intinfor3 as pid
                                      })
                                  };
                              });
                          };
                          //
                          IMP_RESTORE(mas, dume).done(function () {
                              //
                              d.resolve();
                              //
                          }).fail(function (err) {
                              //
                              d.reject({ err: err, ste: 'addhed' });
                              //
                          });
                          //
                      };

                    //
                    //
                    JOB.demo.conf= {

                        KY: 1, //loai log 1 = import

                        olddb: JOB.demo.ini.dbNa,//ten db mac dinh

                        _t: new Date().getTime(), //thoi gian import

                        _u: ''//user import

                        , dauvet: JOB.demo.conf.dauvet

                    };
                    //
                    //
                    //
                    JOB.l0g(//1: log user import emp profile
                        [1, JOB.demo.conf]
                    ,
                    {
                        tenDB: dume.db
                        , tb: mas[0]
                        , keyPath: mas[1]

                    },true).done(Ste_IMP).fail(function (err) {

                        d.reject({ err: err, ste: 'addlog' });

                    });
                    //
                    //
                    return d.promise();
                    //
                }


            }//end GET

            ,

            headermaster: {//header data master

                loadHED: function (op) {
                    //
                    const tha$ = this,
                        d = $.Deferred();
                    //
                    fn.LOAD({

                        tenDB: JOB.demo.ini.dbNa, tb: JOB.demo.ini.csdl[1].tb/*table employees*/

                    }).done(function (v1) {

                        tbHED = TAFFY(v1);

                    });
                    //
                    //
                    return d.promise();
                    //
                }

                ,

                jdat:function(){
                    //co 2 cho dung
                    //1. section pb-cv dashboard
                    //2. employees profile
                    //
                    const  d = $.Deferred();
                    //
                    if (!tbHED) {

                        fn.LOAD({

                            tenDB: JOB.demo.ini.dbNa, tb: JOB.demo.ini.csdl[1].tb/*table employees*/

                        }).done(function (b) {

                            if (b) {
                                tbHED = TAFFY(

                                    b.reduce(function (re, v) {
                                        var deC = enDAT(v._, JOB.demo.ini.coHED, 1)// JSON.parse(v._.atou());
                                        //deC.id = v.id;
                                        re.push(deC)
                                        return re;
                                    }, []) || []

                                );
                                //
                                //du em tinh o day cho lanh
                                //
                                tafy_2_jdat();
                                d.resolve();
                                //
                            } else {
                                masdat.jdat = JSON.parse(masdat[lan].atou());
                                d.resolve();
                            };
                            //
                        }).fail(function (err) {
                            //
                            masdat.jdat = JSON.parse(masdat[lan].atou());
                            d.resolve();
                            //
                        });
                        //
                        //
                    } else {
                        //
                        tafy_2_jdat();
                        d.resolve();
                        //
                    };
                    //
                    return d.promise();
                    //
                }

                ,

                demo: function (op, tha$) {
                    //co 2 cho dung
                    //1. section pb-cv dashboard
                    //2. employees profile
                    //
                    const d = $.Deferred(),
                        fnRST = function () {
                            d.resolve(JSON.stringify([JOB.demo.conf, tbEMP().get().length]));
                        };
                    //
                    //
                    setTimeout(function () {
                        $.ajax({

                            cache: false,

                            url: op.url,

                            success: function (rst) {

                        
                                tha$.GET({ dat: rst.atou(), qry: 'restore' }).done(function () {
  
                                    fnRST();

                                });

                                //debugger;
                            },
                            error: function (xhr, textStatus, errorThrown) {

                                fnRST();

                                //debugger;
                            }
                        });
                    }, 500);
                    //
                    return d.promise();
                }

                ,

                GET: function (op) {
                    //
                    const tha$ = this,
                        d = $.Deferred();
                    //
                    switch (op.qry) {

                        case 'jdat': {
                            //
                            if (masdat.jdat) {
                                d.resolve(masdat.jdat);
                            } else {
                                if (!JOB.demo.conf.hasOwnProperty("KY")) {
                                    //
                                    masdat.jdat = JSON.parse(masdat[lan].atou());
                                    d.resolve(masdat.jdat);
                                    //
                                } else {
                                    tha$.jdat().then(function (value) {
                                        d.resolve(masdat.jdat)
                                    });
                                };
                            };
                            //
                            break;
                        }
                        case 'acts': {
                            //
                            //debugger;
                            //chua load activity log 
                            if (!JOB.demo.actLOGs) {

                                fn.LOAD({ tenDB: JOB.demo.db, tb: JOB.demo.tb[1][0]/*table head of demo master*/ })
                                    .done(function (a) {
                                        //
                                        JOB.demo.actLOGs = a && a.map(function (rw) {
                                            return JSON.parse(rw.__.atou());
                                        }) || [];
                                        //
                                        //sap xep lai theo thoi gian ....
                                        JOB.demo.IMPLOGs = JOB.demo.IMPLOGs.concat(JOB.demo.actLOGs);
                                        //
                                        JOB.demo.IMPLOGs.sort(function (d, c) {
                                            //debugger;
                                            return c._t - d._t;
                                        });
                                        //
                                        d.resolve(JSON.stringify(JOB.demo.IMPLOGs));
                                        //
                                    });

                            } else {
                                //
                                d.resolve(JSON.stringify(JOB.demo.IMPLOGs));
                                //
                            };
                            //
                            break;
                        }
                        case 'demo': {
                            //
                            //ben demo ngay va luon call
                            //
                            const RES = {};
                            if (!JOB.demo.conf.KY && tbEMP().get().length == 0){
                                RES.inidat = tha$.demo(op, tha$);
                            };
                            //
                            d.resolve(RES);
                            //
                            break;
                        }
                        case 'backup': {
                            //
                            //chua load activity log 
                            tha$.GET({ qry: 'jdat' }).done(function (v1) {

                                d.resolve(JSON.stringify([JOB.demo.ini, tbEMP().get().map(function (d) {

                                    return enDAT(d, JOB.demo.ini.coMA);

                                })
                                ,
                                {
                                    'secs': masdat.jdat.secs.map(function (x) {
                                        return jdat_2_tafy( x);
                                    }),
                                    'poss': masdat.jdat.poss.map(function (x) {
                                        return jdat_2_tafy( x);
                                    })
                                }

                                ]));

                            });
                            //
                            break;
                        }
                        case "restore": {
                            //
                            //
                            JOB.demo.conf = {

                                KY: 3, //loai log 2 = restore

                                olddb: JOB.demo.ini.dbNa,//ten db mac dinh

                                _t: new Date().getTime(), //thoi gian import

                                _u: ''//user import

                                , dauvet: JOB.demo.conf.dauvet

                            };
                            //
                            //
                            op.dat = JSON.parse(op.dat);
                            var dume = JOB.demo,
                                mas = dume.tb[0]; //quy uoc table demo0 = log user restore apphrm.dat
                            //
                            //
                            //
                            JOB.l0g(//3: log user restore emp profile from backup
                                [3, JOB.demo.conf]
                            ,
                            {
                                tenDB: dume.db
                                , tb: mas[0]
                                , keyPath: mas[1]

                            }, true).done(function (rv) {
                                //
                                dume = op.dat[1].reduce(function (re, v) {
                                    re.push(enDAT(v, JOB.demo.ini.coMA, 1));
                                    return re;
                                }, []) || [];
                                //
                                mas = $.map(op.dat[2], function (i, va) {
                                    return i;
                                });
                                //
                                IMP_RESTORE(mas, dume).done(function () {
                                    //
                                    d.resolve();
                                    //
                                }).fail(function (err) {
                                    //
                                    d.reject({ err: err, ste: 'addhed' });
                                    //
                                });
                                //
                            }).fail(function (err) {

                                d.reject({ err: err, ste: 'addlog' });

                            });
                            //
                            break;
                        }
                        default: {

                            d.resolve();

                            break;
                        }
                    };
                    //
                    return d.promise();
                    //
                }

                ,

                LOG: function (op) {

                    //debugger;

                    var d = $.Deferred()
                        , th$ = this

                        , dume = JOB.demo

                        , mas = dume.tb[1];//quy uoc table demo1 = log user change profile 

                    //
                    JOB.l0g(//2: log user edit emp profile
                            [2, $.extend(
                                {
                                    _t: new Date().getTime() //thoi gian modify

                                    , _u: ''

                                    , KY: 2//cho cung format voi log import ...

                                    , ki: op.ki//kind of modify /1:new/2:edit/3:delete

                                }//user modify
                                , op.dat) ]
                            ,

                            {
                                tenDB: dume.db
                                , tb: mas[0]
                                , keyPath: mas[1]

                            }, !!JOB.demo.actLOGs).done(function () {
                                //
                                d.resolve(1);//not important
                                //
                            }).fail(function (err) {
                                //
                                d.resolve(1);//not important
                                //
                            }
                        );
                    //
                    //
                    return d.promise();
                    //
                }
            }
        }//end api

        ,

        demo: {

            db: 'demo1'.hexEncode(),//chua thong tin co ban demo + log

            tb:[],//se khoi tao bang loop phia duoi [['head'.hexEncode(), { keyPath: "id" }], ['log'.hexEncode(), { keyPath: "id", autoIncrement: true },["pid"]]],

            ini: {

                dbNa: 'apphrm_localdb'.hexEncode(),//ten db mac dinh neu ko co import

                dbTB: '\x61\x70\x70\x63\x73\x64\x6C_'.hexEncode(),//appcsdl

                coMA: ["acno", "empcode", "ho", "ten", "birthday", "hireday", "img", "gender", "marital", "secid", "posid", "degree", "offdate", "email", "phone", "cmnd", "ngaycap", "noicap", "address", "notes"
                        , 'i1', 'i2', 'i3', 'i4', 'i5'
                        , 'dec1', 'dec2', 'dec3', 'dec4', 'dec5'
                        , 'nga1', 'nga2', 'nga3', 'nga4', 'nga5'
                        , 'txt1', 'txt2', 'txt3','id']
                ,
                //	Select RowID as id,intinfor2 as oid,intinfor3 as pid,RptName as rpt,HeaderName as dis From Header Where Kind=1
                coHED: ['id' //RowID as id
                    , 'ten' //HeaderName as dis
                    , 'rpt' //RptName as rpt

                    , 'kind'// Kind=1
                    , 'isdef', 'ngay', 'parentid', 'notes', 'i1'

                        , 'i2'//intinfor2 as oid
                        , 'i3'//intinfor3 as pid

                        , 'i4', 'i5', 'i6', 'i7', 'i8', 'i9', 'i10', 'i11', 'i12', 'i13', 'i14', 'i15', 'i16'
                        , 'dec1','dec2','dec3','dec4','dec5'
                        ,'nga1','nga2','nga3','nga4','nga5' 
                        ,'txt1' ,'txt2', 'txt3'
                ]
                ,

                csdl : [{
                        tb: 'emps'.hexEncode(),
                        path:{ keyPath: "id", autoIncrement: true }
                    }
                    ,
                    {
                        tb: 'head'.hexEncode(),
                        path:{ keyPath: "ri", autoIncrement: true }
                    }
                    ,
                    {
                        tb: 'line'.hexEncode(),
                        path: { keyPath: "ri", autoIncrement: true }
                    }
                    ,
                    {
                        tb: 'logs'.hexEncode(),
                        path: { keyPath: "ri", autoIncrement: true }
                    }
                    ,
                    {
                        tb: 'jobs'.hexEncode(),
                        path: { keyPath: "ri", autoIncrement: true }
                    }
                ]

            }

            ,

            c$dl: function (db, na, op) {
                //debugger;
                //phai di tao toan bo databse demo 1
                for (var z = 0; z < JOB.demo.ini.csdl.length; z++) {
                    //
                    var na = JOB.demo.ini.dbTB + JOB.demo.ini.csdl[z].tb;
                    if (db.objectStoreNames.contains(na)) db.deleteObjectStore(na);
                    //
                    fn.createTB(db, na, { keyPath: JOB.demo.ini.csdl[z].path, F: JOB.demo.ini.csdl[z].F });
                    //
                };
            }

            ,

            conf: { dauvet: [1, 2, 3] }

        }
    }

    ,

    fn = {

        CB: function (op) {
            debugger;
            return op.c$b && op.c$b();
        }
        ,
        createTB: function (D$b, na, op) {
            var tc = D$b.createObjectStore(na, op.keyPath);
            if (op.F && op.F.length > 0) {
                for (var z = 0; z < op.F.length ; z++) {
                    tc.createIndex(op.F[z], op.F[z], { unique: false });
                };
            };
        }
        ,
        SAVE: function (dat, op) {
            //debugger;
            var d3 = $.Deferred(),
                na = JOB.demo.ini.dbTB + op.tb;

            lo$DB(function (db) {

                //debugger;
                //
                if (db.kq == 0) {//create new
                    //
                    var D$b = db.e.target.result;//var Db = e.target.result;
                    //
                    if (op.createC$B) {
                        op.createC$B(D$b, na, op);
                    } else {
                        if (D$b.objectStoreNames.contains(na)) D$b.deleteObjectStore(na);
                        fn.createTB(D$b, na, op);
                    };
                    //
                } else if (db.kq == 1) { //ok
                    //
                    var saveRST = 0,
                        ts = db.rst.transaction([/*lin,*/ na], "readwrite"),
                        tcStore = ts.objectStore(na),
                        key = op.keyPath.keyPath,
                        req;

                    //
                    if (op.act == 'delete') {
                        //
                        req = tcStore[op.act](dat[key]);
                        //
                    } else {
         
                        if (op.act == 'bulk') {
                            //
                            //reset table ....
                            tcStore.clear();
                            //
                            if (dat.length == 0) {//user muon clean emp list
                                //
                                db.rst.close();
                                d3.resolve(0);
                                //
                                return;
                                //
                            } else {
                                saveRST = dat.length;
                                dat.forEach(function (d) {
                                    //base 64
                                    //
                                    req = tcStore.add({ _: enDAT(d, op.coMA, 2) });
                                    //
                                });
                            };
                            //
                        } else {
                            //
                            //console.log(dat);
                            var sD;
                            //
                            if (op.mRAW) {//mode raw - khi tao log thi save ko can adap

                                sD = dat;//save origin

                            } else {
                                //
                                sD = { _: enDAT(dat, op.coMA,2)};
                                if (op.act === 'put') sD[key] = dat[key];
                            };
                            //
                            req = tcStore[op.act || 'add'](sD);//sD
                            //
                        };
                        //
                        //
                        req.onsuccess = function (e) {
                            //
                            saveRST = saveRST == 0 ? 1 : saveRST;
                            dat[key] = e.target.result;//auto ID vua tao ra
                            //
                        };
                        //
                    };
                    //
                    //
                    //
                    ts.oncomplete = function () {
                        //
                        db.rst.close();
                        //
                        d3.resolve(saveRST);
                        //
                    };

                    ts.onerror = function (e) {
                        //debugger;
                        //
                        d3.reject(e.target.error);
                        //some type of error handler
                    };
                }
            },op.tenDB,{ noV:1});

            return d3.promise();
        }
        ,

        LOAD: function (op) {

            var defe = $.Deferred(),
                na = JOB.demo.ini.dbTB + op.tb;
            //
            lo$DB(function (db) {
                //
                //debugger;
                if (db.kq == 0) {//create new
                    //
                    db.cb('cancel');
                    //khong tao moi
                    defe.resolve(null);
                    //
                } else if (db.kq == 1) { //ok
                    // dbTBname: ['loghis', 'tc3'],
                    var req
                    , rst = []
                    , ts = db.rst.transaction([na], "readonly")
                    , tc3Store = ts.objectStore(na);
                    //
                    ts.oncomplete = function () {
                        db.rst.close();
                        defe.resolve(rst);
                    };
                    //
                    tc3Store.openCursor().onsuccess = function (e) {
                        var cursor = e.target.result;
                        if (cursor) {
                            //if (logIDs.indexOf(cursor.value.logid) > -1) {
                            rst.push(cursor.value);
                            //};
                            cursor.continue();
                        } else {
                            //End
                        }
                    };
                    //
                    //co muon doc them table nao nua k?
                    if (op.readMORE) {
                        op.readMORE(db);
                    };
                    //
                } else if (db.kq == 2) { //error

                    defe.resolve(null);

                };
                //
            }, op.tenDB, { noV:1});
            //
            return defe.promise();
            //
        }

    };

    var tinhCong = (function () { // scoping

        function MyObj(op) { // constructor
            //
            //if (!(this instanceof MyObj)) {
            //    return new MyObj(op);
            //};
            //
            //
            try {
                //
                var hwnEN = JOB;
                op.uri.split('/').forEach(function (hwn) {
                    if (hwn != '' && hwnEN) {
                        hwnEN = hwnEN[hwn];
                    };
                });
                //
                return hwnEN[op.act](op);
                //
            } catch (error) {
                //
                return $.Deferred().reject({ error: error });
                //
            };
        };

        return MyObj;

    })();
    //
    //
    //tao 20 table log dieu khien version db, quy uoc cai zero dung dau tien
    for (var lg = 0; lg < 20; lg++) {
        JOB.demo.tb.push([('log_' + lg).hexEncode(), { keyPath: "id", autoIncrement: true }, [/*"KY"*/]]);
    };
    //
    //
    _gsC('https://cdnjs.cloudflare.com/ajax/libs/taffydb/2.7.3/taffy-min.js', 'js', function () {
        //
        JOB.demo.IMPLOGs = [];
        //
        $.when(fn.LOAD({ tenDB: JOB.demo.db, tb: JOB.demo.tb[0][0]/*table head of demo master*/ })).done(function (a) {

            if (a) {//co log his import
                //debugger;
                //tim nguoc tu duoi len
                for (var z = a.length - 1; z > -1; z--) {
                    //
                    //chua log import here ...
                    JOB.demo.IMPLOGs.unshift(JSON.parse(a[z].__.atou()));
                    //
                    //khi endcode KY='KEY'= '_'
                    if ([1,3].indexOf( a[z]._ )>-1 && !JOB.demo.conf.KY) {
                        //
                        $.extend(JOB.demo.conf, JOB.demo.IMPLOGs[0]);// a[a.length - 1];//lay cai cuoi cung
                        //
                        //lay import moi nhat
                        JOB.demo.ini.dbNa = JOB.demo.conf._t.toString().hexEncode();
                        //
                        //break;//break trong for=exit for
                    };
                    //
                };
                //
            };
            //
            //
            //
            $.when(fn.LOAD({

                tenDB: JOB.demo.ini.dbNa, tb: JOB.demo.ini.csdl[0].tb/*table employees*/

                //, readMORE: function (db) {

                //    for (var z = 1; z < JOB.demo.ini.csdl.length; z++) {
                //        //
                //        var na = JOB.demo.ini.dbTB + JOB.demo.ini.csdl[z].tb;

                //        if (db.rst.objectStoreNames.contains(na)) {
                //            var ts = db.rst.transaction([na], "readonly")
                //                , tc3Store = ts.objectStore(na);
                //            //
                //            tc3Store.openCursor().onsuccess = function (e) {
                //                var cursor = e.target.result;
                //                if (cursor) {
                //                    //if (logIDs.indexOf(cursor.value.logid) > -1) {
                //                    //rst.push(cursor.value);
                //                    //};
                //                    console.log(cursor.value);

                //                    cursor.continue();

                //                } else {
                //                    //End
                //                }
                //            };
                //        };
                //        //
                //    };
                //}

            })).done(function (b) {

                tbEMP = TAFFY(

                    b && b.reduce(function (re, v) {
                        var deC = enDAT(v._, JOB.demo.ini.coMA, 1)// JSON.parse(v._.atou());
                        deC.id = v.id;
                        re.push(deC)
                        return re;
                    }, []) || []


                    //JSON.parse('[{"acno":4,"empcode":"HR0004","ho":"Trần văn","ten":"Thời","birthday":"2000-01-01","hireday":"2021-04-15","img":"https://i.imgur.com/htHuqOg.jpg","gender":1,"marital":10,"secid":1002,"posid":2003,"degree":"Cử nhân Anh văn","offdate":null,"email":"tvthoi@hellohrm.com","phone":"0963111222","cmnd":"","ngaycap":"2021-04-19","noicap":"","address":"111 Nguyễn Thái Bình - HCM","notes":"Đây là nhân viên thử nghiệm ….","pid":0,"id":129},{"acno":5,"empcode":"Dhdhdhdh","ho":"Hxhchfh","ten":"xhfjDfjj","birthday":"2000-01-01","hireday":"2021-04-18","img":"","gender":1,"marital":10,"secid":1002,"posid":2003,"degree":"Djdjfjfjf","offdate":"2021-04-26","email":"Jdfjfjfjf","phone":"jfjfjfjcj","cmnd":"fdjdjxhXj","ngaycap":"2021-04-19","noicap":"Fjfjfjfjjfjfdjfj","address":"Duhfufjfjfj","notes":"Djjffjjfjffj","pid":0,"id":130},{"acno":6,"empcode":"Djdhdhdhđ","ho":"Hdhdhdjdjddjxdjdjdjdidididi","ten":"Jcjdjfjd","birthday":"2000-01-01","hireday":"2021-04-18","img":"","gender":1,"marital":10,"secid":1002,"posid":2003,"degree":"Fjfjfjfjfjfh","offdate":"2021-04-26","email":"Hđhhđhdjdjdj","phone":"Jdjdududududdjfjfufidididudud","cmnd":"Djdhdhduuf","ngaycap":"2021-04-26","noicap":"Jfjfjfjfjfhf","address":"Fjfjfjfjfjfu","notes":"Fjfjfjfjfj","pid":0,"id":131},{"acno":8,"empcode":"Nfnffjjffjfffnjfjfjf","ho":"Đìuufu","ten":"Hfjfjfjfjf","birthday":"2000-01-01","hireday":"2021-04-18","img":"","gender":1,"marital":10,"secid":1003,"posid":2003,"degree":"Tjfjfjfjfifu","offdate":"2021-04-30","email":"Ncjccjcjcjcj","phone":"Djdjfjfjfjfjfj","cmnd":"Fjfjfjfifif","ngaycap":"2021-04-12","noicap":"Nfjcjcjcjcjcjftjtjifjfufifi","address":"Fjfjfjfjj","notes":"Hfhffhfufu","pid":0,"id":133},{"acno":9,"empcode":"Dbdbfjdjfjfj","ho":"ffjdjfjfjfjfjfiffiiff","ten":"fiiifjfjfj","birthday":"2000-01-01","hireday":"2021-04-18","img":"","gender":1,"marital":10,"secid":1003,"posid":2003,"degree":"Fufufufufu","offdate":"2021-04-26","email":"Djdjdjdjjf","phone":"Djdifufufifi","cmnd":"Djfjjffjfifi","ngaycap":"2021-04-23","noicap":"Fhfufufuuf","address":"Chfjfjfufifu","notes":"Chcjcjdjhfjfjf","pid":0,"id":134},{"acno":10,"empcode":"Hdhdhdhdhdh","ho":"No","ten":"Name","birthday":"2000-01-01","hireday":"2021-04-18","img":"","gender":1,"marital":10,"secid":1004,"posid":2003,"degree":"Djfjfjfjfjjjf","offdate":"2021-04-26","email":"Djdjfjdjjfdjdjjdfjfjdjfjfj","phone":"Djfjfjfjfj","cmnd":"Djdndjdjfjdjfj","ngaycap":"2021-04-05","noicap":"Hedjdjdjđjdjd","address":"Djfjfjfjfjfhfjfjfjfxjfjfhf","notes":"Dcjfhfjfjcjfcjfjfucjfj","pid":0,"id":135},{"acno":11,"empcode":"11","ho":"Trần hoàng","ten":"Kiếm","birthday":"2000-01-01","hireday":"2021-04-18","img":"","gender":1,"marital":10,"secid":1004,"posid":2003,"degree":"Fffjfjfjfuf","offdate":"2021-04-26","email":"Jdjdjdjdjffj","phone":"Đjdjjdjdjdjf","cmnd":"Ffjfjfjfjjfjf","ngaycap":"2021-04-26","noicap":"Jdjdjdjdjdjddudjdjdiud","address":"Gfvcccff Đ","notes":"Dddddddddddd","pid":0,"id":136},{"acno":12,"empcode":"Djfhcb","ho":"Hồ Hoàng","ten":"Thông","birthday":"2000-01-01","hireday":"2021-04-18","img":"","gender":1,"marital":10,"secid":1004,"posid":2003,"degree":"Jchcfhjffjfjjf","offdate":"2021-04-21","email":"Xnxnjxfnjcjfjfj","phone":"Chxhchchxhhxchhchc","cmnd":"Jfjfjfhdjxhfhf","ngaycap":"2021-04-26","noicap":"ffffjfhhfjfhh","address":"Ffffhfhfhhgh","notes":"Nghfjffjfjf","pid":0,"id":137},{"acno":14,"empcode":"Kxkck","ho":"Trần ","ten":"Khang","birthday":"2000-01-01","hireday":"2021-04-18","img":"","gender":1,"marital":10,"secid":1005,"posid":2003,"degree":"Xjxkxjxkkcjc","offdate":"2021-04-25","email":"Ditncid","phone":"Djdjfjcfjf","cmnd":"Ckcjfoxjcoddkkc","ngaycap":"2021-04-26","noicap":"Xnnxjxkxkxkc","address":"Xkxckkxkx","notes":"Ckxkkxkxkc","pid":0,"id":139},{"acno":17,"empcode":"Hgfjfghg","ho":"Trần","ten":"Kim ","birthday":"2000-01-01","hireday":"2021-04-18","img":"","gender":1,"marital":10,"secid":1007,"posid":2003,"degree":"cfjcjJfjcjcjf","offdate":"2021-04-26","email":"Xbbxxhjxchhxgx","phone":"xdhdudjhFjfjf","cmnd":"jfhfjfffhf","ngaycap":"2021-04-19","noicap":"Nfndndjdfjfjf","address":"hfhfhffhfh","notes":"fhfhfhfjf","pid":0,"id":142},{"acno":18,"empcode":"Dndndjdjfjfjd","ho":"Djdhdhdhdhdhfh","ten":"Hchchchch","birthday":"2000-01-01","hireday":"2021-04-18","img":"","gender":1,"marital":10,"secid":1007,"posid":2003,"degree":"Djfjfjjffjfjfjfjfjfi","offdate":"2021-04-26","email":"Dndnxjxjcjcjf","phone":"djFdhffhfhfhfuf","cmnd":"Uhfhfhdufuduf","ngaycap":"2021-04-26","noicap":"Djdjdjdjfjfhfhfhf","address":"Ffhfjfjfjfuuffiifif","notes":"Djfjfjfjfj","pid":0,"id":143},{"acno":19,"empcode":"NdjdjđjcjfjjCó ","ho":"Trầm","ten":"Thanh","birthday":"2000-01-01","hireday":"2021-04-18","img":"","gender":1,"marital":10,"secid":1008,"posid":2003,"degree":"Dhdhdhdhffj","offdate":"2021-04-26","email":"Dndjfjfjfjfjfjfjfjfjfjfhfhfjfj","phone":"fffhfhFjjdj","cmnd":"fjducfdhj","ngaycap":"2021-04-26","noicap":"Jdjdjdjdjf","address":"Dhdhdhdhfhdh","notes":"Dhdhdhdhfhdhfh","pid":0,"id":144},{"acno":20,"empcode":"Hdhdhdhdhd","ho":"Nguyễn Kim","ten":"Đồng","birthday":"2000-01-01","hireday":"2021-04-18","img":"","gender":1,"marital":10,"secid":1008,"posid":2003,"degree":"Fhfjjffjjf","offdate":"2021-04-12","email":"Djdjdjcjfjd","phone":"Hcjfhcjfjfjf","cmnd":"Djfhfhfjfjf","ngaycap":"2021-04-19","noicap":"Đjfjjffjf","address":"Fjjfdjjfjf","notes":"Chfjfjfjcfjj","pid":0,"id":145},{"acno":21,"empcode":"Fjjfjc","ho":"Bùi","ten":"Thông","birthday":"2000-01-01","hireday":"2021-04-18","img":"","gender":1,"marital":10,"secid":1008,"posid":2003,"degree":"Dhfhfjfjfjf","offdate":"2021-04-26","email":"Jcjfjfjcjfjfjfcjcjcj","phone":"chchchcccj","cmnd":"Chchhcjcjcjc","ngaycap":"2021-04-26","noicap":"Chcjfjfjfjcj","address":"Jffjjfjffjjf","notes":"Djfjfjfjffj","pid":0,"id":146},{"acno":22,"empcode":"Djfjfj","ho":"No ","ten":"Name","birthday":"2000-01-01","hireday":"2021-04-18","img":"","gender":1,"marital":10,"secid":1009,"posid":2003,"degree":"Djfjfjfjfjcjcjfcfjfjfjf","offdate":"2021-04-26","email":"Jcjcjcjfj","phone":"ffjFjjfjfjfjfj","cmnd":"fjfjfjfjcjfj","ngaycap":"2021-04-26","noicap":"Xhxhxnfnfjfjf","address":"Hcchjchfhcjcjcccicufu","notes":"djcJdjcjcjcjf","pid":0,"id":147},{"acno":23,"empcode":"Dndjfnfjjfdj","ho":"No","ten":"Name","birthday":"2000-01-01","hireday":"2021-04-18","img":"","gender":1,"marital":10,"secid":1009,"posid":2003,"degree":"jdfjfjfjfhcjfjfjf","offdate":"2021-04-26","email":"Cjxjfjfjjfjf","phone":"Jfhfjfj","cmnd":"fufjfjjfjfjffu","ngaycap":"2021-04-19","noicap":"Cncnfnfncjjfjd","address":"Idifududud","notes":"fdudjCufuufu","pid":0,"id":148},{"acno":24,"empcode":"Djdjfjf","ho":"No","ten":"Name","birthday":"2000-01-01","hireday":"2021-04-18","img":"","gender":1,"marital":10,"secid":1009,"posid":2003,"degree":"Djdhdjfjhf","offdate":"2021-04-26","email":"Tjfjfjfjfjf","phone":"Chxjxjcjdhfjj","cmnd":"ịcfjjfjdh","ngaycap":"2021-04-19","noicap":"Cbdjdjfjfdjfj","address":"djfdjfjfjf","notes":"jfjfjffjfj","pid":0,"id":149},{"acno":25,"empcode":"Djdjdjf","ho":"No","ten":"Name","birthday":"2000-01-01","hireday":"2021-04-18","img":"","gender":1,"marital":10,"secid":1010,"posid":2003,"degree":"Dfjfjfjuffjfjf","offdate":"2021-04-26","email":"Djdjdjcjfjfjf","phone":"Cù","cmnd":"uhfBfhfjfjfjf","ngaycap":"2021-04-18","noicap":"Djfjfjfjfjffjfjf","address":"Hfhfjfjfjdjfjjffjfdjfjfj","notes":"Hffhj","pid":0,"id":150},{"acno":26,"empcode":"Ndndnfjf","ho":"No","ten":"Name","birthday":"2000-01-01","hireday":"2021-04-18","img":"","gender":1,"marital":10,"secid":1010,"posid":2003,"degree":"fjjfjfjfjfi","offdate":"2021-04-19","email":"Ndjdhfjdjffjfjfjfhdjdjfjf","phone":"Dfjfjfjfjfjcjf","cmnd":"Hfjfjfjcjfjf","ngaycap":"2021-04-19","noicap":"Dnfnjfjffififj","address":"fjfjfjfjf","notes":"fuffjfjfifuFuf","pid":0,"id":151},{"acno":27,"empcode":"Hdhdfhfjfj","ho":"No","ten":"Name","birthday":"2000-01-01","hireday":"2021-04-18","img":"","gender":1,"marital":10,"secid":1010,"posid":2003,"degree":"Hfhfjfjfjfhfjf","offdate":"2021-04-12","email":"Djdjfjfjfjf","phone":"fjfJfjfjfjfjfj","cmnd":"fjffjfjffjFjjf","ngaycap":"2021-04-12","noicap":"Nfnfnfjfjfjfjfif","address":"fjfJfjfjfjfufdhfhfjfjf","notes":"Dùu","pid":0,"id":152}]')

                )

                dbXLSX.ini.resolve(tinhCong);

            });
            //
            //
        });



 


    }, 'taffy-min.js');

    dbXLSX.ini = $.Deferred();



})();