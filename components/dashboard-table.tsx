import { Table, TableBody, TableCell, TableHead, TableHeaderCell, TableRow } from './table'
import { faker } from '@faker-js/faker'

const salesPeople = [
    {
        name: faker.person.fullName(),
        leads: 49,
        sales: faker.commerce.price(),
        quota: '750,000',
        variance: 'low',
        region: 'Region B',
        status: 'overperforming',
    },
    {
        name: faker.person.fullName(),
        leads: 49,
        sales: faker.commerce.price(),
        quota: '750,000',
        variance: 'low',
        region: 'Region B',
        status: 'overperforming',
    },
    {
        name: faker.person.fullName(),
        leads: 49,
        sales: faker.commerce.price(),
        quota: '750,000',
        variance: 'low',
        region: 'Region B',
        status: 'overperforming',
    },
    {
        name: faker.person.fullName(),
        leads: 49,
        sales: faker.commerce.price(),
        quota: '750,000',
        variance: 'low',
        region: 'Region B',
        status: 'overperforming',
    },
    {
        name: faker.person.fullName(),
        leads: 49,
        sales: faker.commerce.price(),
        quota: '750,000',
        variance: 'low',
        region: 'Region B',
        status: 'overperforming',
    },
]

export default function DashboardTable() {
    return (
        <Table className="w-full">
            <TableHead>
                <TableRow>
                    <TableHeaderCell>Name</TableHeaderCell>
                    <TableHeaderCell className="text-right p-3">Leads</TableHeaderCell>
                    <TableHeaderCell className="text-right p-3">Sales ($)</TableHeaderCell>
                    <TableHeaderCell className="text-right p-3">Quota ($)</TableHeaderCell>
                    <TableHeaderCell className="text-right p-3">Variance</TableHeaderCell>
                    <TableHeaderCell className="text-right p-3">Region</TableHeaderCell>
                    <TableHeaderCell className="text-right p-3">Status</TableHeaderCell>
                </TableRow>
            </TableHead>
            <TableBody>
                {salesPeople.map((item) => (
                    <TableRow key={item.name}>
                        <TableCell>{item.name}</TableCell>
                        <TableCell className="text-right p-3">{item.leads}</TableCell>
                        <TableCell className="text-right p-3">{item.sales}</TableCell>
                        <TableCell className="text-right p-3">{item.quota}</TableCell>
                        <TableCell className="text-right p-3">{item.variance}</TableCell>
                        <TableCell className="text-right p-3">{item.region}</TableCell>
                        <TableCell className="text-right p-3"></TableCell>
                    </TableRow>
                ))}
            </TableBody>
        </Table>
    )
}
