"""commit

Revision ID: d46eddcfafda
Revises: d0e4103324f6
Create Date: 2024-09-24 22:10:16.036837

"""
from typing import Sequence, Union

from alembic import op
import sqlalchemy as sa


# revision identifiers, used by Alembic.
revision: str = 'd46eddcfafda'
down_revision: Union[str, None] = 'd0e4103324f6'
branch_labels: Union[str, Sequence[str], None] = None
depends_on: Union[str, Sequence[str], None] = None


def upgrade() -> None:
    pass


def downgrade() -> None:
    pass
