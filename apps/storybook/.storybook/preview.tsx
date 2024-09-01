import type { Preview, StoryFn } from '@storybook/react'
import { withScreenshot } from 'storycap'

import '@repo/tailwind/styles.css'

export const decorators = [
    (Story: StoryFn) => (
        <div className="flex items-center justify-center p-5">
            <Story />
        </div>
    ),
    withScreenshot
]

const preview: Preview = {
    parameters: {
        controls: {
            matchers: {
                color: /(background|color)$/i,
                date: /Date$/i
            }
        },
        options: {
            storySort: {
                order: ['Component']
            }
        },
        screenshot: {
            fullPage: false,
            delay: 1000,
            viewports: {
                desktop: { width: 1920, height: 1080 },
                tablet: { width: 768, height: 1024 },
                mobile: { width: 360, height: 800, isMobile: true, hasTouch: true }
            }
        }
    },
    tags: ['autodocs']
}

export default preview
