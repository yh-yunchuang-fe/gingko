import CardHeader from './CardHeader';
import CardBody from './CardBody';
import CardFooter from './CardFooter';
import { CardProps } from './propsType';
declare function Card(props: CardProps): JSX.Element;
declare namespace Card {
    var Header: typeof CardHeader;
    var Body: typeof CardBody;
    var Footer: typeof CardFooter;
}
export default Card;
