export default {
  plugins: {
    tailwindcss: {},
    // autoprefixer: {},
	"postcss-preset-env": {
      stage: 3, // Choisis le niveau de fonctionnalités CSS à activer (3 est recommandé)
      features: {
        "nesting-rules": true, // Active le nesting CSS natif
      },
	}
  },
}
