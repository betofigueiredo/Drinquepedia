import { HeadContent, Scripts, createRootRoute } from '@tanstack/react-router';
import { TanStackRouterDevtoolsPanel } from '@tanstack/react-router-devtools';
import { TanStackDevtools } from '@tanstack/react-devtools';
import '@fontsource/roboto';
import '@fontsource/roboto/500.css';
import '@fontsource/source-serif-pro';
import '@fontsource/source-serif-pro/700.css';
import appCss from '../styles.css?url';

// Components
import NavigationBar from '@/components/NavigationBar';
import NotFound404 from '@/components/NotFound404';

export const Route = createRootRoute({
  head: () => ({
    meta: [
      { charSet: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { url: 'https://drinquepedia.com' },
      { title: 'Drinquepedia | Things go better with a cocktail!' },
      {
        name: 'description',
        content:
          'Tudo o que você procura sobre bar e coquetéis. Fotos, dicas para preparo, videos e muito mais. Acesse já!',
      },
      // Open Graph
      {
        property: 'og:title',
        content: 'Drinquepedia | Things go better with a cocktail!',
      },
      {
        property: 'og:description',
        content:
          'Tudo o que você procura sobre bar e coquetéis. Fotos, dicas para preparo, videos e muito mais. Acesse já!',
      },
      {
        property: 'og:image',
        content: 'https://drinquepedia.com/images/logo.jpg',
      },
      {
        property: 'og:url',
        content: 'https://drinquepedia.com',
      },
      // Twitter Card
      {
        name: 'twitter:title',
        content: 'Drinquepedia | Things go better with a cocktail!',
      },
      {
        name: 'twitter:description',
        content:
          'Tudo o que você procura sobre bar e coquetéis. Fotos, dicas para preparo, videos e muito mais. Acesse já!',
      },
      {
        name: 'twitter:image',
        content: 'https://drinquepedia.com/images/logo.jpg',
      },
    ],
    links: [{ rel: 'stylesheet', href: appCss }],
  }),
  shellComponent: RootDocument,
  notFoundComponent: () => <NotFound404 />,
});

function RootDocument({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <HeadContent />
      </head>
      <body>
        <div className="pb-60 pt-12 md:pt-0">
          <NavigationBar />
          {children}
        </div>
        <TanStackDevtools
          config={{ position: 'bottom-right' }}
          plugins={[
            {
              name: 'Tanstack Router',
              render: <TanStackRouterDevtoolsPanel />,
            },
          ]}
        />
        <Scripts />
      </body>
    </html>
  );
}
