import MediaCard from "../../ui/components/MediaCard"
import { HomeLayout } from "../layout/HomeLayout"

export const MediaCardItems = ({ items }) => {
    return (
        <HomeLayout>
            {items.map((item) => {
                return <MediaCard
                    key={item.id}
                    {...item}
                />
            })
            }
        </HomeLayout>
    )
}