"""highlights-and-intructions

Revision ID: 8d60ccfb9ee6
Revises: 7008add44a9f
Create Date: 2024-03-12 22:00:22.056918

"""
from typing import Sequence, Union

from alembic import op
import sqlalchemy as sa
from sqlalchemy.dialects import mysql

# revision identifiers, used by Alembic.
revision: str = '8d60ccfb9ee6'
down_revision: Union[str, None] = '7008add44a9f'
branch_labels: Union[str, Sequence[str], None] = None
depends_on: Union[str, Sequence[str], None] = None


def upgrade() -> None:
    # ### commands auto generated by Alembic - please adjust! ###
    op.create_table('highlight',
    sa.Column('id', sa.String(length=36), nullable=False),
    sa.Column('type', sa.String(length=30), nullable=False),
    sa.Column('title', sa.String(length=30), nullable=False),
    sa.Column('subtitle', sa.String(length=256), nullable=False),
    sa.Column('description', mysql.TEXT(), nullable=True),
    sa.PrimaryKeyConstraint('id')
    )
    op.create_index(op.f('ix_highlight_id'), 'highlight', ['id'], unique=False)
    op.create_table('instruction',
    sa.Column('id', sa.String(length=36), nullable=False),
    sa.Column('title', sa.String(length=30), nullable=False),
    sa.Column('subtitle', sa.String(length=256), nullable=False),
    sa.Column('description', mysql.TEXT(), nullable=True),
    sa.PrimaryKeyConstraint('id')
    )
    op.create_index(op.f('ix_instruction_id'), 'instruction', ['id'], unique=False)
    op.create_table('drink_highlight',
    sa.Column('drink_id', sa.String(length=36), nullable=False),
    sa.Column('highlight_id', sa.String(length=36), nullable=False),
    sa.ForeignKeyConstraint(['drink_id'], ['drink.id'], ),
    sa.ForeignKeyConstraint(['highlight_id'], ['highlight.id'], ),
    sa.PrimaryKeyConstraint('drink_id', 'highlight_id')
    )
    # ### end Alembic commands ###


def downgrade() -> None:
    # ### commands auto generated by Alembic - please adjust! ###
    op.drop_table('drink_highlight')
    op.drop_index(op.f('ix_instruction_id'), table_name='instruction')
    op.drop_table('instruction')
    op.drop_index(op.f('ix_highlight_id'), table_name='highlight')
    op.drop_table('highlight')
    # ### end Alembic commands ###
