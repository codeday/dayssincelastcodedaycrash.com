
import { Heading } from '@codeday/topo/Atom/Text';
import Content from '@codeday/topo/Molecule/Content';
import Page from '../components/page';

export default function Home() {
	return (
		<Page slug="/">
			<Content>
				<Heading as="h2" fontSize="5xl" textAlign="center">How many days since the last CodeDay crash?</Heading>
			</Content>
		</Page>
	)
}