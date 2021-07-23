import { EntityRepository, Repository } from "typeorm"
import { Tag } from "../entities/Tags"

@EntityRepository(Tag)
class TagsRepository extends Repository<Tag>{

}

export { TagsRepository }