console.log('x.js');
exports.action = function() {
    function f1 () {}
    let
        b1 = true,
        b2 = false,
        f2 = function () {},
        f3 = () => {},
        f4 = async function () {},
        f5 = async () => {},
        f6 = function * () {},
        f7 = new Function('', ''),
        n1 = 234,
        n2 = -234.3423,
        s1 = 'wegeg',
        s2 = `sdfsdsd`,
        a1 = [23, 423, 23, 'sdfsdf'],
        o1 = {a:1, b:'d'},
        u1;
    console.log({
        b1,
        b2,
        f1,
        f2,
        f3,
        f4,
        f5,
        f6,
        f7,
        n1,
        n2,
        s1,
        s2,
        null: null,
        a1,
        o1,
        u1,
    });
    console.log({
        b1: typeof b1,
        b2: typeof b2,
        f1: typeof f1,
        f2: typeof f2,
        f3: typeof f3,
        f4: typeof f4,
        f5: typeof f5,
        f6: typeof f6,
        f7: typeof f7,
        n1: typeof n1,
        n2: typeof n2,
        s1: typeof s1,
        s2: typeof s2,
        null: typeof null,
        a1: typeof a1,
        o1: typeof o1,
        u1: typeof u1,
    });
    console.log({
        f1: f1 instanceof Function,
        f2: f2 instanceof Function,
        f3: f3 instanceof Function,
        f4: f4 instanceof Function,
        f5: f5 instanceof Function,
        f6: f6 instanceof Function,
        f7: f7 instanceof Function,
        f1o: f1 instanceof Object,
        f2o: f2 instanceof Object,
        a1: a1 instanceof Array,
        a1o: a1 instanceof Object,
        o1: o1 instanceof Object,
        o1a: o1 instanceof Array,
        null: null instanceof Object,
        u1: u1 instanceof Object,
    });


    const ff = (y) => (x) => Math.pow(x, y); // x^y
    const fff = (x, y) => Math.pow(x, y);
    const sqr = ff(2);
    const cube = ff(3);

    console.log({
        '2^2': sqr(2),
        '2^2 x': fff(2, 2),
        '3^2': sqr(3),
        '3^2 x': fff(3, 2),
        '4^2': sqr(4),
        '4^2 x': fff(4, 2),
        '2^3': cube(2),
        '2^3 x': fff(2, 3),
        '3^3': cube(3),
        '3^3 x': fff(3, 3),
        '4^3': cube(4),
        '4^3 x': fff(4, 3),
    });

    const sum = (a) => {
        let result = a;
        const f = (a) => {
            result += a;
            return f;
        };
        f.toString = () => result;
        return f;
    };
    console.log(sum(1)(2)(3)(4)(5));
    console.log(sum(1)(2)(3)(4)(5)(6));

    // Array.prototype.l = function(){ return this.length; };
    Object.defineProperties(Array.prototype, {
        l: { get: function(){ return this.length; }, },
    })

    class A extends Array {
        constructor(...args) {
            super(...args);
            Object.defineProperties(this, {
                l: { get: () => this.length, },
            });
            if (args.length===1) {
                this.fill(undefined);
            }
        }

    }

    console.log({ a: Array(5).l, });
    console.log({ a: Array(5).fill(undefined), });
    console.log({ a: Array(5, 4), });
    console.log({ a: new A(5).l, });
};
