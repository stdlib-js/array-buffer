<!--

@license Apache-2.0

Copyright (c) 2018 The Stdlib Authors.

Licensed under the Apache License, Version 2.0 (the "License");
you may not use this file except in compliance with the License.
You may obtain a copy of the License at

   http://www.apache.org/licenses/LICENSE-2.0

Unless required by applicable law or agreed to in writing, software
distributed under the License is distributed on an "AS IS" BASIS,
WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
See the License for the specific language governing permissions and
limitations under the License.

-->


<details>
  <summary>
    About stdlib...
  </summary>
  <p>We believe in a future in which the web is a preferred environment for numerical computation. To help realize this future, we've built stdlib. stdlib is a standard library, with an emphasis on numerical and scientific computation, written in JavaScript (and C) for execution in browsers and in Node.js.</p>
  <p>The library is fully decomposable, being architected in such a way that you can swap out and mix and match APIs and functionality to cater to your exact preferences and use cases.</p>
  <p>When you use stdlib, you can be absolutely certain that you are using the most thorough, rigorous, well-written, studied, documented, tested, measured, and high-quality code out there.</p>
  <p>To join us in bringing numerical computing to the web, get started by checking us out on <a href="https://github.com/stdlib-js/stdlib">GitHub</a>, and please consider <a href="https://opencollective.com/stdlib">financially supporting stdlib</a>. We greatly appreciate your continued support!</p>
</details>

# ArrayBuffer

[![NPM version][npm-image]][npm-url] [![Build Status][test-image]][test-url] [![Coverage Status][coverage-image]][coverage-url] <!-- [![dependencies][dependencies-image]][dependencies-url] -->

> [Constructor][mdn-arraybuffer] which returns an object used to represent a generic, fixed-length raw binary data buffer.

<!-- Section to include introductory text. Make sure to keep an empty line after the intro `section` element and another before the `/section` close. -->

<section class="intro">

</section>

<!-- /.intro -->

<!-- Package usage documentation. -->

<section class="installation">

## Installation

```bash
npm install @stdlib/array-buffer
```

Alternatively,

-   To load the package in a website via a `script` tag without installation and bundlers, use the [ES Module][es-module] available on the [`esm`][esm-url] branch (see [README][esm-readme]).
-   If you are using Deno, visit the [`deno`][deno-url] branch (see [README][deno-readme] for usage intructions).
-   For use in Observable, or in browser/node environments, use the [Universal Module Definition (UMD)][umd] build available on the [`umd`][umd-url] branch (see [README][umd-readme]).

The [branches.md][branches-url] file summarizes the available branches and displays a diagram illustrating their relationships.

To view installation and usage instructions specific to each branch build, be sure to explicitly navigate to the respective README files on each branch, as linked to above.

</section>

<section class="usage">

## Usage

```javascript
var ArrayBuffer = require( '@stdlib/array-buffer' );
```

#### ArrayBuffer( size )

Returns an [`ArrayBuffer`][mdn-arraybuffer] having a specified number of bytes.

<!-- eslint-disable stdlib/require-globals -->

```javascript
var buf = new ArrayBuffer( 5 );
// returns <ArrayBuffer>
```

* * *

### Properties

#### ArrayBuffer.length

Number of input arguments the constructor accepts.

<!-- eslint-disable stdlib/require-globals -->

```javascript
var len = ArrayBuffer.length;
// returns 1
```

#### ArrayBuffer.prototype.byteLength

**Read-only** property which returns the length (in bytes) of the [`ArrayBuffer`][mdn-arraybuffer].

<!-- eslint-disable stdlib/require-globals -->

```javascript
var buf = new ArrayBuffer( 5 );
var byteLength = buf.byteLength;
// returns 5
```

* * *

### Methods

#### ArrayBuffer.isView( arr )

Static method which returns a `boolean` indicating if provided a buffer view.

<!-- eslint-disable stdlib/require-globals -->

```javascript
var Float64Array = require( '@stdlib/array-float64' );
var view = new Float64Array( 10 );

var bool = ArrayBuffer.isView( view );
// returns true
```

#### ArrayBuffer.prototype.slice( \[start\[, end]] )

Copies the bytes of an `ArrayBuffer` to a new [`ArrayBuffer`][mdn-arraybuffer].

<!-- eslint-disable stdlib/require-globals -->

```javascript
var b1 = new ArrayBuffer( 10 );

var b2 = b1.slice();
// returns <ArrayBuffer>

var bool = ( b2 === b1 );
// returns false
```

By default, the method copies from the beginning of the [`ArrayBuffer`][mdn-arraybuffer]. To beginning copying from a different byte index, provide a `start` argument, specifying the starting byte index (inclusive).

<!-- eslint-disable stdlib/require-globals -->

```javascript
var b1 = new ArrayBuffer( 10 );
var b2 = b1.slice( 2 );

var nbytes = b2.byteLength;
// returns 8
```

If `start < 0`, the index is relative to the end of the [`ArrayBuffer`][mdn-arraybuffer].

<!-- eslint-disable stdlib/require-globals -->

```javascript
var b1 = new ArrayBuffer( 10 );
var b2 = b1.slice( -2 );

var nbytes = b2.byteLength;
// returns 2
```

By default, the method copies to the end of the [`ArrayBuffer`][mdn-arraybuffer]. To copy until a particular byte index, provide an `end` index, specifying the ending byte index (exclusive).

<!-- eslint-disable stdlib/require-globals -->

```javascript
var b1 = new ArrayBuffer( 10 );
var b2 = b1.slice( 2, 6 );

var nbytes = b2.byteLength;
// returns 4
```

If `end < 0`, the index is relative to the end of the [`ArrayBuffer`][mdn-arraybuffer].

<!-- eslint-disable stdlib/require-globals -->

```javascript
var b1 = new ArrayBuffer( 10 );
var b2 = b1.slice( 2, -2 );

var nbytes = b2.byteLength;
// returns 6
```

</section>

<!-- /.usage -->

* * *

<!-- Package usage notes. Make sure to keep an empty line after the `section` element and another before the `/section` close. -->

<section class="notes">

</section>

<!-- /.notes -->

<!-- Package usage examples. -->

<section class="examples">

## Examples

<!-- eslint no-undef: "error" -->

```javascript
var randu = require( '@stdlib/random-base-randu' );
var Float64Array = require( '@stdlib/array-float64' );
var Uint8Array = require( '@stdlib/array-uint8' );
var toBinaryString = require( '@stdlib/number-uint8-base-to-binary-string' );
var ArrayBuffer = require( '@stdlib/array-buffer' );

var bytes;
var buf;
var arr;
var i;

// Create a new ArrayBuffer:
buf = new ArrayBuffer( 64 );

// Create a Float64 array buffer view:
arr = new Float64Array( buf.byteLength/8 );
for ( i = 0; i < arr.length; i++ ) {
    arr[ i ] = randu() * 100.0;
}

// Create a "bytes" view of the array buffer:
bytes = new Uint8Array( arr.buffer );

// Print the bytes:
for ( i = 0; i < bytes.length; i++ ) {
    console.log( 'byte %d: %s', i, toBinaryString( bytes[ i ] ) );
}
```

</section>

<!-- /.examples -->

<!-- Section to include cited references. If references are included, add a horizontal rule *before* the section. Make sure to keep an empty line after the `section` element and another before the `/section` close. -->

<section class="references">

</section>

<!-- /.references -->

<!-- Section for related `stdlib` packages. Do not manually edit this section, as it is automatically populated. -->

<section class="related">

* * *

## See Also

-   <span class="package-name">[`@stdlib/buffer-ctor`][@stdlib/buffer/ctor]</span><span class="delimiter">: </span><span class="description">Buffer.</span>
-   <span class="package-name">[`@stdlib/array-float32`][@stdlib/array/float32]</span><span class="delimiter">: </span><span class="description">Float32Array.</span>
-   <span class="package-name">[`@stdlib/array-float64`][@stdlib/array/float64]</span><span class="delimiter">: </span><span class="description">Float64Array.</span>
-   <span class="package-name">[`@stdlib/array-int16`][@stdlib/array/int16]</span><span class="delimiter">: </span><span class="description">Int16Array.</span>
-   <span class="package-name">[`@stdlib/array-int32`][@stdlib/array/int32]</span><span class="delimiter">: </span><span class="description">Int32Array.</span>
-   <span class="package-name">[`@stdlib/array-int8`][@stdlib/array/int8]</span><span class="delimiter">: </span><span class="description">Int8Array.</span>
-   <span class="package-name">[`@stdlib/array-shared-buffer`][@stdlib/array/shared-buffer]</span><span class="delimiter">: </span><span class="description">SharedArrayBuffer.</span>
-   <span class="package-name">[`@stdlib/array-uint16`][@stdlib/array/uint16]</span><span class="delimiter">: </span><span class="description">Uint16Array.</span>
-   <span class="package-name">[`@stdlib/array-uint32`][@stdlib/array/uint32]</span><span class="delimiter">: </span><span class="description">Uint32Array.</span>
-   <span class="package-name">[`@stdlib/array-uint8`][@stdlib/array/uint8]</span><span class="delimiter">: </span><span class="description">Uint8Array.</span>
-   <span class="package-name">[`@stdlib/array-uint8c`][@stdlib/array/uint8c]</span><span class="delimiter">: </span><span class="description">Uint8ClampedArray.</span>

</section>

<!-- /.related -->

<!-- Section for all links. Make sure to keep an empty line after the `section` element and another before the `/section` close. -->


<section class="main-repo" >

* * *

## Notice

This package is part of [stdlib][stdlib], a standard library for JavaScript and Node.js, with an emphasis on numerical and scientific computing. The library provides a collection of robust, high performance libraries for mathematics, statistics, streams, utilities, and more.

For more information on the project, filing bug reports and feature requests, and guidance on how to develop [stdlib][stdlib], see the main project [repository][stdlib].

#### Community

[![Chat][chat-image]][chat-url]

---

## License

See [LICENSE][stdlib-license].


## Copyright

Copyright &copy; 2016-2026. The Stdlib [Authors][stdlib-authors].

</section>

<!-- /.stdlib -->

<!-- Section for all links. Make sure to keep an empty line after the `section` element and another before the `/section` close. -->

<section class="links">

[npm-image]: http://img.shields.io/npm/v/@stdlib/array-buffer.svg
[npm-url]: https://npmjs.org/package/@stdlib/array-buffer

[test-image]: https://github.com/stdlib-js/array-buffer/actions/workflows/test.yml/badge.svg?branch=main
[test-url]: https://github.com/stdlib-js/array-buffer/actions/workflows/test.yml?query=branch:main

[coverage-image]: https://img.shields.io/codecov/c/github/stdlib-js/array-buffer/main.svg
[coverage-url]: https://codecov.io/github/stdlib-js/array-buffer?branch=main

<!--

[dependencies-image]: https://img.shields.io/david/stdlib-js/array-buffer.svg
[dependencies-url]: https://david-dm.org/stdlib-js/array-buffer/main

-->

[chat-image]: https://img.shields.io/badge/zulip-join_chat-brightgreen.svg
[chat-url]: https://stdlib.zulipchat.com

[stdlib]: https://github.com/stdlib-js/stdlib

[stdlib-authors]: https://github.com/stdlib-js/stdlib/graphs/contributors

[umd]: https://github.com/umdjs/umd
[es-module]: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Modules

[deno-url]: https://github.com/stdlib-js/array-buffer/tree/deno
[deno-readme]: https://github.com/stdlib-js/array-buffer/blob/deno/README.md
[umd-url]: https://github.com/stdlib-js/array-buffer/tree/umd
[umd-readme]: https://github.com/stdlib-js/array-buffer/blob/umd/README.md
[esm-url]: https://github.com/stdlib-js/array-buffer/tree/esm
[esm-readme]: https://github.com/stdlib-js/array-buffer/blob/esm/README.md
[branches-url]: https://github.com/stdlib-js/array-buffer/blob/main/branches.md

[stdlib-license]: https://raw.githubusercontent.com/stdlib-js/array-buffer/main/LICENSE

[mdn-arraybuffer]: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/ArrayBuffer

<!-- <related-links> -->

[@stdlib/buffer/ctor]: https://github.com/stdlib-js/buffer-ctor

[@stdlib/array/float32]: https://github.com/stdlib-js/array-float32

[@stdlib/array/float64]: https://github.com/stdlib-js/array-float64

[@stdlib/array/int16]: https://github.com/stdlib-js/array-int16

[@stdlib/array/int32]: https://github.com/stdlib-js/array-int32

[@stdlib/array/int8]: https://github.com/stdlib-js/array-int8

[@stdlib/array/shared-buffer]: https://github.com/stdlib-js/array-shared-buffer

[@stdlib/array/uint16]: https://github.com/stdlib-js/array-uint16

[@stdlib/array/uint32]: https://github.com/stdlib-js/array-uint32

[@stdlib/array/uint8]: https://github.com/stdlib-js/array-uint8

[@stdlib/array/uint8c]: https://github.com/stdlib-js/array-uint8c

<!-- </related-links> -->

</section>

<!-- /.links -->
