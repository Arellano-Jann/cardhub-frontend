import adapter from '@sveltejs/adapter-node';
 
export default {
  kit: {
    adapter: adapter()
  }
};

// import adapter from '@sveltejs/adapter-static';
 
// const dev = process.argv.includes('dev');
 
// /** @type {import('@sveltejs/kit').Config} */
// export default {
//   kit: {
//     adapter: adapter(),
//     paths: {
//       base: dev ? '' : '/cardhub-frontend',
//     }
//   }
// };

// import adapter from '@sveltejs/adapter-static';
 
// export default {
//   kit: {
//     adapter: adapter({
//       // default options are shown. On some platforms
//       // these options are set automatically — see below
//       pages: 'build',
//       assets: 'build',
//       fallback: null,
//       precompress: false,
//       strict: true
//     })
//   }
// };

// import firebase from "svelte-adapter-firebase";

// /** @type {import('@sveltejs/kit').Config} */
// export default {
//   kit: {
//     adapter: firebase({
//       firebaseJsonPath: "",
//       target: "svelte-func-single-site",
//       sourceRewriteMatch: "",
//     }),
//   },
// };