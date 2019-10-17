/**
 * Internal dependencies
 */
import EditorScaffold from '../';
import { POST_ID, editorSettings, initialEdits, post } from './__junk';

export default { title: 'Editor Scaffold', component: EditorScaffold };

export const _default = () => (
	<EditorScaffold
		postId={ POST_ID }
		postType="post"
		onError={ console.error.bind( console ) }
		settings={ editorSettings }
		initialEdits={ initialEdits }
		post={ post }
	/>
);
