"""first commit

Revision ID: 24fed8de2f77
Revises: 23023f119f91
Create Date: 2024-09-24 21:14:48.086114

"""
from typing import Sequence, Union

from alembic import op
import sqlalchemy as sa


# revision identifiers, used by Alembic.
revision: str = '24fed8de2f77'
down_revision: Union[str, None] = '23023f119f91'
branch_labels: Union[str, Sequence[str], None] = None
depends_on: Union[str, Sequence[str], None] = None


def upgrade() -> None:
    pass


def downgrade() -> None:
    pass
