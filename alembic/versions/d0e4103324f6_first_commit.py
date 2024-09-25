"""first commit

Revision ID: d0e4103324f6
Revises: 24fed8de2f77
Create Date: 2024-09-24 21:21:32.547144

"""
from typing import Sequence, Union

from alembic import op
import sqlalchemy as sa


# revision identifiers, used by Alembic.
revision: str = 'd0e4103324f6'
down_revision: Union[str, None] = '24fed8de2f77'
branch_labels: Union[str, Sequence[str], None] = None
depends_on: Union[str, Sequence[str], None] = None


def upgrade() -> None:
    pass


def downgrade() -> None:
    pass
