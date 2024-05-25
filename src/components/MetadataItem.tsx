import { Alert, AlertTitle, AlertDescription } from '@/components/ui/alert'

interface MetadataItemProps {
	metaKey: string
	value: string
}

const MetadataItem = (props: MetadataItemProps) => {
	return (
		<Alert variant="default">
			<AlertTitle>{props.metaKey.charAt(0).toUpperCase() + props.metaKey.slice(1)}</AlertTitle>
			<AlertDescription>{props.value}</AlertDescription>
		</Alert>
	)
}

export default MetadataItem
