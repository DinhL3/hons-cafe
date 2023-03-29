import styles from './OrderCard.module.scss';
import { Link } from "react-router-dom";

import Button from '../UI/Button/Button';

import PaidIcon from '@mui/icons-material/Paid';
import DoneIcon from '@mui/icons-material/Done';

const OrderCard = ({ order }) => {
    const id = order.id;
    const date = new Date(order.created_at);
    const formattedDate = date.toLocaleString('en-GB', { timeZone: 'UTC', day: '2-digit', month: '2-digit', year: 'numeric', hour: '2-digit', minute: '2-digit' });
    const status = order.status;
    const name = order.shipment.full_name;
    const totalPrice = order.totalPrice;

    return (
        <div className={styles.card}>
            <p className={styles['order-id']}>{id}</p>
            <div className={styles.status}>{status === "PAID" ? <PaidIcon color="primary" /> : <DoneIcon color="success" />}
                <span>{status}</span>
            </div>
            <p>{formattedDate}</p>
            <p>Deliver to: {name}</p>
            <p className={styles.total}>€{totalPrice}</p>
            <Link to={`/orders/${id}`}><Button className="dark">Show details</Button></Link>
        </div>
    );
}

export default OrderCard;